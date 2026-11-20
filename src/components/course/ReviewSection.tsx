import React, { useState, useEffect } from 'react';
import { Star, ThumbsUp, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { Review } from '../../types';
import { RatingStars, UserAvatar } from '../common';
import { api } from '../../services/api';
import { useAppDispatch } from '../../store';
import { showToast } from '../../store/slices/uiSlice';

interface ReviewSectionProps {
  courseId: string;
  courseRating: number;
  totalReviews: number;
}

export const ReviewSection: React.FC<ReviewSectionProps> = ({
  courseId,
  courseRating,
  totalReviews,
}) => {
  const dispatch = useAppDispatch();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [userRating, setUserRating] = useState(5);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [helpfulLiked, setHelpfulLiked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const loadReviews = async () => {
      setLoading(true);
      const data = await api.reviews.getByCourseId(courseId);
      setReviews(data);
      setLoading(false);
    };
    loadReviews();
  }, [courseId]);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setIsSubmitting(true);
    try {
      const newReview = await api.reviews.addReview(courseId, userRating, comment);
      setReviews([newReview, ...reviews]);
      setComment('');
      dispatch(showToast({
        message: 'Your review has been posted successfully!',
        type: 'success'
      }));
    } catch {
      dispatch(showToast({
        message: 'Failed to post review. Please try again.',
        type: 'error'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleHelpful = (reviewId: string) => {
    setHelpfulLiked(prev => ({ ...prev, [reviewId]: !prev[reviewId] }));
  };

  return (
    <div className="space-y-8">
      {/* Header and Rating Breakdown */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200">
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-emerald-600" />
          Student Ratings & Reviews
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Big Score Box */}
          <div className="text-center md:border-r border-slate-200 pr-4">
            <div className="text-5xl font-black text-slate-900 mb-2">
              {courseRating.toFixed(1)}
            </div>
            <div className="flex justify-center mb-1">
              <RatingStars rating={courseRating} size={20} showScore={false} />
            </div>
            <p className="text-xs text-slate-500 font-medium">
              Course Rating • {totalReviews.toLocaleString()} ratings
            </p>
          </div>

          {/* Progress Breakdown Bars */}
          <div className="md:col-span-2 space-y-2">
            {[5, 4, 3, 2, 1].map((stars, idx) => {
              const percentages = [78, 16, 4, 1, 1];
              const pct = percentages[idx];
              return (
                <div key={stars} className="flex items-center gap-3 text-xs text-slate-600">
                  <span className="w-12 font-medium flex items-center gap-1">
                    {stars} <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  </span>
                  <div className="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-amber-400 h-full rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-8 text-right font-medium text-slate-500">
                    {pct}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Add Review Form */}
      <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100">
        <h4 className="font-bold text-slate-900 mb-1">Write a Review</h4>
        <p className="text-xs text-slate-500 mb-4">Share your honest feedback and learning experience</p>

        <form onSubmit={handleSubmitReview} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Select Rating
            </label>
            <RatingStars
              rating={userRating}
              size={24}
              interactive={true}
              onRate={(r) => setUserRating(r)}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Your Review
            </label>
            <textarea
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="What did you love most about this course? How did it help your career?"
              className="w-full p-3.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !comment.trim()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors disabled:opacity-50 shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isSubmitting ? 'Posting...' : 'Submit Review'}</span>
          </button>
        </form>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {loading ? (
          <div className="py-8 text-center text-slate-400">Loading reviews...</div>
        ) : reviews.length === 0 ? (
          <div className="py-8 text-center text-slate-500 bg-white rounded-2xl border border-slate-200">
            No reviews yet for this course. Be the first to leave one!
          </div>
        ) : (
          reviews.map((rev) => (
            <div key={rev.id} className="bg-white rounded-2xl p-5 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <UserAvatar
                    name={rev.userName}
                    avatar={rev.userAvatar}
                    size="md"
                    shape="circle"
                    className="ring-2 ring-emerald-500/20"
                  />
                  <div>
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      {rev.userName}
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded-md">
                        <CheckCircle2 className="w-2.5 h-2.5" /> Verified Learner
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <RatingStars rating={rev.rating} size={13} showScore={false} />
                      <span className="text-[11px] text-slate-400">{rev.date}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => toggleHelpful(rev.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${
                    helpfulLiked[rev.id]
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : 'text-slate-500 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>{rev.helpfulCount + (helpfulLiked[rev.id] ? 1 : 0)}</span>
                </button>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed pl-13">
                {rev.comment}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

