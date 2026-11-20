import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Plus, 
  Trash2, 
  Save, 
  Video, 
  FileText, 
  CheckCircle, 
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { useAppDispatch } from '../../store';
import { createNewCourse } from '../../store/slices/courseSlice';
import { showToast } from '../../store/slices/uiSlice';
import { Chapter, CourseLevel } from '../../types';

export const CourseEditor: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Development');
  const [level, setLevel] = useState<CourseLevel>('Beginner');
  const [language, setLanguage] = useState('English');
  const [price, setPrice] = useState('2999');
  const [originalPrice, setOriginalPrice] = useState('6999');
  const [thumbnail, setThumbnail] = useState(
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80'
  );

  const [learningPoints, setLearningPoints] = useState([
    'Build production-ready applications with modern best practices',
    'Understand clean architecture patterns and state management',
    'Deploy and scale applications to cloud environments',
  ]);

  const [requirementsList, setRequirementsList] = useState([
    'Basic programming understanding and internet connection',
    'A computer with modern web browser and code editor installed',
  ]);

  const [chapters, setChapters] = useState<Chapter[]>([
    {
      id: 'ch-new-1',
      title: 'Section 1: Course Orientation & Environment Setup',
      order: 1,
      lessons: [
        {
          id: 'les-new-1-1',
          chapterId: 'ch-new-1',
          title: 'Course Introduction & Tools Checklist',
          durationMinutes: 10,
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          description: 'A comprehensive walk-through of the software dependencies, syllabus structure, and developer tooling.',
          isFreePreview: true,
          resources: [
            { id: 'res-new-1', title: 'Starter Cheatsheet & Code Starter', fileType: 'pdf', fileSize: '1.5 MB', downloadUrl: '#' }
          ]
        },
        {
          id: 'les-new-1-2',
          chapterId: 'ch-new-1',
          title: 'Core Architecture Deep Dive',
          durationMinutes: 20,
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
          description: 'Mastering the fundamental theories and writing first hands-on exercises.',
          isFreePreview: false,
          quiz: {
            id: 'quiz-new-1',
            title: 'Foundational Knowledge Evaluation',
            passingScore: 75,
            questions: [
              {
                id: 'qn-1',
                question: 'Which component is essential for deterministic state management?',
                options: ['Pure functions and immutable state', 'Global window variables', 'Random intervals', 'Uncontrolled side effects'],
                correctAnswerIndex: 0,
                explanation: 'Pure functions and immutability ensure deterministic, debuggable state transformations.'
              }
            ]
          }
        }
      ]
    }
  ]);

  const handleAddChapter = () => {
    const newChId = 'ch-new-' + (chapters.length + 1);
    setChapters([
      ...chapters,
      {
        id: newChId,
        title: `Section ${chapters.length + 1}: Advanced Concepts`,
        order: chapters.length + 1,
        lessons: [
          {
            id: `les-${newChId}-1`,
            chapterId: newChId,
            title: 'Hands-on Implementation Lecture',
            durationMinutes: 15,
            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            description: 'Building the core components step by step.',
            isFreePreview: false
          }
        ]
      }
    ]);
  };

  const handleAddLesson = (chapterIndex: number) => {
    const updated = [...chapters];
    const ch = updated[chapterIndex];
    const newLesId = `les-${ch.id}-${ch.lessons.length + 1}`;
    ch.lessons.push({
      id: newLesId,
      chapterId: ch.id,
      title: `Lecture ${ch.lessons.length + 1}: Practice & Code Exercise`,
      durationMinutes: 15,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      description: 'Hands-on coding exercise with instructor code walkthrough.',
      isFreePreview: false
    });
    setChapters(updated);
  };

  const handleRemoveLesson = (chIdx: number, lesIdx: number) => {
    const updated = [...chapters];
    updated[chIdx].lessons.splice(lesIdx, 1);
    setChapters(updated);
  };

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      dispatch(showToast({ message: 'Course title is required!', type: 'error' }));
      return;
    }

    const newCourse = await dispatch(
      createNewCourse({
        title,
        subtitle,
        description,
        category,
        level,
        language,
        price: parseFloat(price) || 0,
        originalPrice: parseFloat(originalPrice) || parseFloat(price) || 0,
        thumbnail,
        whatYouWillLearn: learningPoints,
        requirements: requirementsList,
        chapters,
        status: 'published',
      })
    ).unwrap();

    dispatch(
      showToast({
        message: `Course "${newCourse.title}" successfully published to catalogue!`,
        type: 'success',
      })
    );
    navigate('/instructor');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <Link
          to="/instructor"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Instructor Studio
        </Link>
        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Course Studio Builder
        </span>
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Create & Publish Course
        </h1>
        <p className="text-sm text-slate-500">
          Define curriculum, embed lecture videos, attach quizzes and assignments for your students.
        </p>
      </div>

      <form onSubmit={handlePublish} className="space-y-8">
        {/* Step 1: Basic Information */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
            1. Basic Course Details
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Course Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. Master Modern Full-Stack Development with Next.js 14"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Short Subtitle *</label>
              <input
                type="text"
                required
                placeholder="e.g. Build production-grade applications with Server Actions, Prisma, and Tailwind."
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                >
                  <option value="Development">Development</option>
                  <option value="Design">Design</option>
                  <option value="Cloud & DevOps">Cloud & DevOps</option>
                  <option value="Data Science & AI">Data Science & AI</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Business & Management">Business</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Difficulty Level</label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value as CourseLevel)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="All Levels">All Levels</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Language</label>
                <input
                  type="text"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Course Price (₹ INR)</label>
                <input
                  type="number"
                  step="1"
                  min="0"
                  placeholder="2999 (0 for Free)"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Original / Strikethrough Price (₹ INR)</label>
                <input
                  type="number"
                  step="1"
                  min="0"
                  placeholder="6999"
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Cover Image / Thumbnail URL</label>
              <input
                type="url"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Detailed Description</label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Give learners an in-depth breakdown of what this course delivers..."
                className="w-full p-3.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none leading-relaxed"
              />
            </div>
          </div>
        </div>

        {/* Step 2: Curriculum Builder */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                2. Course Curriculum & Video Lessons
              </h2>
              <p className="text-xs text-slate-500">
                Organize lectures into sections, assign video links, and configure previews.
              </p>
            </div>
            <button
              type="button"
              onClick={handleAddChapter}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold hover:bg-emerald-100 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Section</span>
            </button>
          </div>

          <div className="space-y-6">
            {chapters.map((chapter, chIdx) => (
              <div
                key={chapter.id}
                className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                      Section {chIdx + 1} Title
                    </span>
                    <input
                      type="text"
                      value={chapter.title}
                      onChange={(e) => {
                        const updated = [...chapters];
                        updated[chIdx].title = e.target.value;
                        setChapters(updated);
                      }}
                      className="w-full font-bold text-slate-800 text-sm bg-transparent border-b border-slate-300 focus:outline-none focus:border-emerald-600 pb-1"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => handleAddLesson(chIdx)}
                    className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-emerald-600 shadow-xs"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add Lecture</span>
                  </button>
                </div>

                {/* Chapter's Lessons */}
                <div className="space-y-3 pt-2">
                  {chapter.lessons.map((lesson, lesIdx) => (
                    <div
                      key={lesson.id}
                      className="p-4 rounded-xl bg-white border border-slate-200 space-y-3"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 flex-1">
                          <Video className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <input
                            type="text"
                            value={lesson.title}
                            onChange={(e) => {
                              const updated = [...chapters];
                              updated[chIdx].lessons[lesIdx].title = e.target.value;
                              setChapters(updated);
                            }}
                            className="w-full text-xs font-bold text-slate-800 border-b border-slate-200 focus:outline-none pb-0.5"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveLesson(chIdx, lesIdx)}
                          className="text-slate-400 hover:text-rose-600 p-1"
                          title="Remove Lecture"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div>
                          <label className="text-[11px] text-slate-500 font-semibold block mb-1">
                            Video URL (.mp4 / stream)
                          </label>
                          <input
                            type="text"
                            value={lesson.videoUrl}
                            onChange={(e) => {
                              const updated = [...chapters];
                              updated[chIdx].lessons[lesIdx].videoUrl = e.target.value;
                              setChapters(updated);
                            }}
                            className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 text-xs"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] text-slate-500 font-semibold block mb-1">
                            Duration (Minutes)
                          </label>
                          <input
                            type="number"
                            value={lesson.durationMinutes}
                            onChange={(e) => {
                              const updated = [...chapters];
                              updated[chIdx].lessons[lesIdx].durationMinutes = parseInt(e.target.value) || 10;
                              setChapters(updated);
                            }}
                            className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 text-xs"
                          />
                        </div>
                        <div className="flex items-center gap-2 pt-5">
                          <input
                            type="checkbox"
                            id={`free-prev-${lesson.id}`}
                            checked={lesson.isFreePreview || false}
                            onChange={(e) => {
                              const updated = [...chapters];
                              updated[chIdx].lessons[lesIdx].isFreePreview = e.target.checked;
                              setChapters(updated);
                            }}
                            className="w-4 h-4 rounded text-emerald-600"
                          />
                          <label htmlFor={`free-prev-${lesson.id}`} className="text-xs font-semibold text-slate-700">
                            Allow Free Preview
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publish Actions */}
        <div className="flex items-center justify-end gap-3">
          <Link
            to="/instructor"
            className="px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-lg shadow-emerald-600/30"
          >
            <Save className="w-4 h-4" />
            <span>Publish Course to LMS</span>
          </button>
        </div>
      </form>
    </div>
  );
};

