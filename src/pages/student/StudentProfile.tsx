import React, { useState } from 'react';
import { 
  User as UserIcon, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Save, 
  Sparkles, 
  Camera, 
  BookOpen, 
  Award,
  CheckCircle2,
  Share2,
  Upload,
  Trash2,
  RotateCcw
} from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../store';
import { updateUserProfile } from '../../store/slices/authSlice';
import { showToast } from '../../store/slices/uiSlice';
import { UserAvatar } from '../../components/common';
import { processAvatarFile, isCustomAvatar } from '../../utils';

export const StudentProfile: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const enrollments = useAppSelector((state) => state.learning.enrollments);
  const certificates = useAppSelector((state) => state.learning.certificates);

  const [formData, setFormData] = useState({
    name: currentUser.name || '',
    email: currentUser.email || '',
    headline: currentUser.headline || '',
    bio: currentUser.bio || '',
    phone: currentUser.phone || '',
    location: currentUser.location || '',
    website: currentUser.website || '',
    github: currentUser.github || '',
    linkedin: currentUser.linkedin || '',
    skillsString: (currentUser.skills || []).join(', ')
  });

  const [avatarUrl, setAvatarUrl] = useState(currentUser.avatar);
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        dispatch(showToast({ message: 'Selected image must be under 5MB', type: 'error' }));
        return;
      }
      try {
        const compressedBase64 = await processAvatarFile(file);
        setAvatarUrl(compressedBase64);
        await dispatch(updateUserProfile({ avatar: compressedBase64 }));
        dispatch(showToast({ message: 'Profile photo updated successfully!', type: 'success' }));
      } catch (err: any) {
        dispatch(showToast({ message: err?.message || 'Could not process image', type: 'error' }));
      }
    }
  };

  const handleRemoveAvatar = async () => {
    setAvatarUrl('');
    await dispatch(updateUserProfile({ avatar: '' }));
    dispatch(showToast({ message: 'Photo removed! Defaulting to your name initial.', type: 'info' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      dispatch(showToast({ message: 'Please provide valid name and email address', type: 'error' }));
      return;
    }

    setIsSaving(true);
    const skills = formData.skillsString
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    await dispatch(
      updateUserProfile({
        name: formData.name,
        email: formData.email,
        headline: formData.headline,
        bio: formData.bio,
        phone: formData.phone,
        location: formData.location,
        website: formData.website,
        github: formData.github,
        linkedin: formData.linkedin,
        skills,
        avatar: avatarUrl,
      })
    );
    setIsSaving(false);

    dispatch(
      showToast({
        message: 'Your profile settings have been saved successfully!',
        type: 'success',
      })
    );
  };

  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Account & Profile Settings
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage your personal bio, developer links, and credential records.
          </p>
        </div>

        {/* Profile Card & Avatar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100">
            {/* Avatar with Camera Trigger */}
            <div className="relative group flex-shrink-0">
              <UserAvatar
                name={formData.name || currentUser.name}
                avatar={avatarUrl}
                size="2xl"
                shape="square"
                className="ring-4 ring-emerald-100 shadow-md text-3xl"
              />
              <label 
                className="absolute -bottom-1.5 -right-1.5 p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all"
                title="Upload custom photo"
              >
                <Camera className="w-4 h-4" />
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/webp"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </label>
            </div>

            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{formData.name}</h3>
                  <p className="text-xs text-emerald-600 font-semibold">{formData.headline || 'Adeptify Learner'}</p>
                </div>

                {/* Photo Action Buttons */}
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold cursor-pointer transition-colors border border-emerald-200 shadow-2xs">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Photo</span>
                    <input
                      type="file"
                      accept="image/png, image/jpeg, image/webp"
                      onChange={handleAvatarChange}
                      className="hidden"
                    />
                  </label>

                  {isCustomAvatar(avatarUrl) && (
                    <button
                      type="button"
                      onClick={handleRemoveAvatar}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-rose-50 text-slate-600 hover:text-rose-600 text-xs font-semibold transition-colors border border-slate-200 hover:border-rose-200"
                      title="Switch back to initial letter avatar"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Use Initial Letter</span>
                    </button>
                  )}
                </div>
              </div>

              <p className="text-[11px] text-slate-400">
                Supports PNG, JPG, or WebP. If no photo is uploaded, your name&apos;s initial letter avatar is displayed automatically.
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" /> {enrollments.length} Enrolled Courses
                </span>
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-500" /> {certificates.length} Certificates
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Role: {currentUser.role}
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Professional Headline
                </label>
                <input
                  type="text"
                  name="headline"
                  placeholder="e.g. Full Stack Developer & UI Enthusiast"
                  value={formData.headline}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Bio / About Me
                </label>
                <textarea
                  rows={3}
                  name="bio"
                  placeholder="Write a brief intro about your background, career targets, or educational focus."
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full p-3.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 leading-relaxed"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Skills & Technologies (comma separated)
                </label>
                <input
                  type="text"
                  name="skillsString"
                  placeholder="React, TypeScript, Next.js, Node.js, Python, Tailwind"
                  value={formData.skillsString}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Personal Website / Portfolio
                </label>
                <div className="relative">
                  <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="url"
                    name="website"
                    placeholder="https://yourportfolio.dev"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  GitHub Profile URL
                </label>
                <div className="relative">
                  <Share2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="url"
                    name="github"
                    placeholder="https://github.com/username"
                    value={formData.github}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="submit"
                disabled={isSaving}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors disabled:opacity-50 shadow-sm"
              >
                <Save className="w-4 h-4" />
                <span>{isSaving ? 'Saving Changes...' : 'Save Profile'}</span>
              </button>
            </div>
          </form>
        </div>
      </main>
  );
};
