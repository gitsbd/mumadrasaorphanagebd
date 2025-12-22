import { GraduationCap, Clock, Users, Target, BookOpen, CheckCircle, Award, FileText } from "lucide-react";
import BaseLink from "@/components/BaseLink";

export default function HifzCourse() {
  const phases = [
    {
      number: 1,
      title: "Hifz Preparation Stage",
      duration: "1–3 months",
      description: "Correct Makharij (pronunciation) of Arabic letters, Tajweed basics, Fluency test in Nazira Qur'an, Memorization readiness assessment",
      focus: "Only students with fluent Qur'an reading enter the Hifz stage.",
    },
    {
      number: 2,
      title: "Initial Hifz Stage",
      target: "First 5–7 Juz",
      daily: "3–5 lines",
      description: "Daily new lesson (Sabaq), Same-day revision (Sabaqi), Weekly teacher-led correction, Tajweed applied practically during memorization",
      focus: "Accuracy > Speed",
    },
    {
      number: 3,
      title: "Intermediate Hifz Stage",
      target: "Middle 10–15 Juz",
      daily: "½ page – 1 page",
      description: "Daily new lesson, Previous day revision, Weekly cumulative revision (Manzil system), Mistake-tracking register per student",
      focus: "Balance between memorization & retention",
    },
    {
      number: 4,
      title: "Advanced Hifz Stage",
      target: "Last 8–10 Juz",
      daily: "1 page (based on ability)",
      description: "Strong emphasis on long-term memory, Structured Dawr (revision of previous Ajza), Teacher evaluation before moving forward",
      focus: "Zero-error memorization",
    },
    {
      number: 5,
      title: "Complete Qur'an Revision (Dawr-e-Qur'an)",
      duration: "6–12 months",
      description: "Full Qur'an revision multiple times, Daily Manzil (½–1 Juz), Weekly full-Juz test, Final oral and written evaluation",
      focus: "Certificate awarded after successful completion",
    },
  ];

  const dailySchedule = [
    { time: "Fajr – 7:00", activity: "New Lesson (Sabaq)" },
    { time: "8:00 – 10:00", activity: "Revision (Sabaqi)" },
    { time: "After Dhuhr", activity: "Old Lesson (Manzil)" },
    { time: "After Asr", activity: "Group revision" },
    { time: "After Maghrib", activity: "Oral listening" },
    { time: "After Isha", activity: "Light revision / Dua" },
  ];

  const tajweedTopics = [
    "Makharij & Sifaat",
    "Noon Saakin & Tanween",
    "Meem Saakin",
    "Madd rules",
    "Qalqalah",
    "Waqf & Ibtida",
  ];

  const outcomes = [
    "Be a complete Hafiz-ul-Qur'an",
    "Recite fluently with proper Tajweed",
    "Maintain long-term memorization",
    "Be eligible for Dawrah/Alim course",
    "Be eligible for Qira'at specialization",
    "Be eligible for Imam / Muazzin training",
    "Be eligible for Teaching Hifz (with permission)",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-700 to-islamic-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Hifz Program</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Qur'an Memorization Program - Modern Standard Bangladesh
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-teal-50 rounded-lg">
                <Users className="h-8 w-8 mx-auto mb-2 text-teal-700" />
                <p className="text-sm text-gray-600 mb-1">Target Age</p>
                <p className="text-xl font-bold text-gray-900">6–15 years</p>
              </div>
              <div className="text-center p-6 bg-teal-50 rounded-lg">
                <Clock className="h-8 w-8 mx-auto mb-2 text-teal-700" />
                <p className="text-sm text-gray-600 mb-1">Duration</p>
                <p className="text-xl font-bold text-gray-900">2.5–4 years</p>
              </div>
              <div className="text-center p-6 bg-teal-50 rounded-lg">
                <BookOpen className="h-8 w-8 mx-auto mb-2 text-teal-700" />
                <p className="text-sm text-gray-600 mb-1">Focus</p>
                <p className="text-xl font-bold text-gray-900">100% Qur'an</p>
              </div>
              <div className="text-center p-6 bg-teal-50 rounded-lg">
                <Target className="h-8 w-8 mx-auto mb-2 text-teal-700" />
                <p className="text-sm text-gray-600 mb-1">Medium</p>
                <p className="text-xl font-bold text-gray-900">Arabic</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Program Objectives</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Complete memorization of the entire Holy Qur'an (30 Juz)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Accurate and beautiful recitation with proper Tajweed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Strong retention system (Dawr & Takrar) to ensure lifelong Hifz</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-700 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Develop discipline, adab, and love for the Qur'an</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Program Phases */}
          <div className="space-y-6 mb-12">
            {phases.map((phase) => (
              <div key={phase.number} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start mb-4">
                  <div className="bg-teal-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mr-4 flex-shrink-0">
                    {phase.number}
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{phase.title}</h2>
                    {phase.duration && (
                      <p className="text-gray-600 mb-2">
                        <strong>Duration:</strong> {phase.duration}
                      </p>
                    )}
                    {phase.target && (
                      <p className="text-gray-600 mb-2">
                        <strong>Target:</strong> {phase.target}
                      </p>
                    )}
                    {phase.daily && (
                      <p className="text-gray-600 mb-2">
                        <strong>Daily Memorization:</strong> {phase.daily}
                      </p>
                    )}
                    <p className="text-gray-700 mb-3">{phase.description}</p>
                    <div className="bg-teal-50 border-l-4 border-teal-700 p-3 rounded">
                      <p className="text-gray-800">
                        <strong>Focus:</strong> {phase.focus}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tajweed Curriculum */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <BookOpen className="h-8 w-8 mr-3 text-teal-700" />
              Tajweed Curriculum (Integrated)
            </h2>
            <p className="text-gray-700 mb-6">
              Tajweed is <strong>not taught separately</strong>, but applied throughout the program:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {tajweedTopics.map((topic, idx) => (
                <div key={idx} className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                  <p className="text-gray-800 font-medium">{topic}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Schedule */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Daily Schedule (Sample)</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-teal-700 text-white">
                    <th className="px-6 py-4 text-left">Time</th>
                    <th className="px-6 py-4 text-left">Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {dailySchedule.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.time}</td>
                      <td className="px-6 py-4 text-gray-700">{item.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Assessment & Monitoring */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Assessment & Monitoring</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Regular Assessments</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Daily teacher sign-off</li>
                  <li>• Weekly evaluation</li>
                  <li>• Monthly progress report</li>
                  <li>• Quarterly retention test</li>
                  <li>• Guardian feedback (if applicable)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Teacher Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Certified Hafiz with strong Tajweed</li>
                  <li>• Minimum 3–5 years Hifz teaching experience</li>
                  <li>• Ability to mentor orphan & vulnerable students</li>
                  <li>• Patience, discipline, and Islamic character</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Islamic Ethics & Discipline */}
          <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Islamic Ethics & Discipline</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Award className="h-6 w-6 text-teal-700 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Daily Adab-ul-Qur'an practice</span>
              </div>
              <div className="flex items-start">
                <Award className="h-6 w-6 text-teal-700 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Punctual Salah in Jama'ah</span>
              </div>
              <div className="flex items-start">
                <Award className="h-6 w-6 text-teal-700 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Cleanliness, respect, and silence discipline</span>
              </div>
              <div className="flex items-start">
                <Award className="h-6 w-6 text-teal-700 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Regular Dua for Hifz preservation</span>
              </div>
            </div>
          </div>

          {/* Completion Outcomes */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <GraduationCap className="h-8 w-8 mr-3 text-teal-700" />
              Completion Outcomes
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Upon completion, a student will:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-700 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Apply Section */}
          <div className="bg-gradient-to-r from-teal-700 to-islamic-dark rounded-xl shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Hifz Journey?</h2>
            <p className="text-xl text-teal-100 mb-6">
              Enroll now for admission to our Hifz Program
            </p>
            <BaseLink
              href="/application?program=hifz"
              className="inline-flex items-center bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              <FileText className="h-6 w-6 mr-2" />
              Enroll Now
            </BaseLink>
          </div>
        </div>
      </section>
    </div>
  );
}

