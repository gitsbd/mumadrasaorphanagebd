import { BookOpen, Clock, Users, Target, CheckCircle, ArrowRight, School, FileText } from "lucide-react";
import Link from "next/link";

export default function NooraniCourse() {
  const level1Subjects = [
    { subject: "Arabic & Quran", topics: "Noorani Qaida, recognition of Arabic letters, joining letters, vowels (harakaat), tanween, sukoon, shaddah" },
    { subject: "Basic Dua & Kalima", topics: "6 Kalimas, basic daily duas (eating, sleeping, entering home, toilet, etc.)" },
    { subject: "Bangla", topics: "Bangla alphabet, simple words and rhymes" },
    { subject: "English", topics: "A–Z recognition, simple words (e.g. apple, ball), greeting phrases" },
    { subject: "Math", topics: "1–10 numbers, shapes, counting objects" },
    { subject: "General Knowledge", topics: "Body parts, animals, birds, colors, seasons, good manners" },
  ];

  const level2Subjects = [
    { subject: "Quran Nazira", topics: "Surah Al-Fatiha to An-Naba (Ampara) memorization and reading" },
    { subject: "Tajweed Basics", topics: "Rules of Noon Sakin, Meem Sakin, Madd, Ikhfa, Idgham, Iqlab, Ghunna" },
    { subject: "Akhlaq & Aqeedah", topics: "Basic belief in Allah, Prophets, Angels, Akhlaq (good manners), simple Islamic stories" },
    { subject: "Bangla", topics: "Sentence building, name of fruits, animals, reading short paragraphs" },
    { subject: "English", topics: "Vocabulary (20–30 words), My Family, Colors, Animals, Classroom objects" },
    { subject: "Math", topics: "1–100 counting, addition/subtraction, basic measurements" },
    { subject: "General Knowledge", topics: "Name of days, months, 5 senses, traffic signals, community helpers" },
  ];

  const level3Subjects = [
    { subject: "Nazira Quran", topics: "Full Quran reading (30 Juz), fluent recitation with proper Tajweed" },
    { subject: "Tajweed Advanced", topics: "Application of all major Tajweed rules in Quran recitation" },
    { subject: "Islamic Studies", topics: "Prophet stories (Nuh, Musa, Isa, Muhammad ﷺ), Salah practice, Wudu, Hifz of selected Surahs" },
    { subject: "Bangla", topics: "Reading comprehension, paragraph writing, rhymes, moral stories" },
    { subject: "English", topics: "Simple reading, greetings, everyday conversations, numbers, days/months" },
    { subject: "Math", topics: "2-digit addition/subtraction, word problems, intro to multiplication" },
    { subject: "General Knowledge", topics: "Islamic months, National Days, common places (school, market, hospital), Bangladeshi identity" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Noorani Program</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Modern & Integrated Curriculum for Islamic Foundational Education
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-islamic-light rounded-lg">
                <Users className="h-8 w-8 mx-auto mb-2 text-islamic-green" />
                <p className="text-sm text-gray-600 mb-1">Target Age</p>
                <p className="text-xl font-bold text-gray-900">4–8 years</p>
              </div>
              <div className="text-center p-6 bg-islamic-light rounded-lg">
                <Clock className="h-8 w-8 mx-auto mb-2 text-islamic-green" />
                <p className="text-sm text-gray-600 mb-1">Duration</p>
                <p className="text-xl font-bold text-gray-900">2–3 years</p>
              </div>
              <div className="text-center p-6 bg-islamic-light rounded-lg">
                <Target className="h-8 w-8 mx-auto mb-2 text-islamic-green" />
                <p className="text-sm text-gray-600 mb-1">Levels</p>
                <p className="text-xl font-bold text-gray-900">3 Progressive</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              This Noorani curriculum is divided into 3 progressive levels, each including both <strong>Islamic Studies</strong> and <strong>Academic Basics</strong> to ensure balanced development. The curriculum is designed for Qawmi Madrasa settings in Bangladesh, especially suitable for institutions that aim to provide both Islamic foundational education and basic general education.
            </p>
          </div>

          {/* Level 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-islamic-green text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mr-4">
                1
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Level 1: Basic Arabic & Quran Foundation</h2>
                <p className="text-gray-600">Noorani Kaida Stage</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {level1Subjects.map((item, idx) => (
                <div key={idx} className="border-l-4 border-islamic-green pl-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.subject}</h3>
                  <p className="text-gray-700">{item.topics}</p>
                </div>
              ))}
            </div>
            <div className="border-t pt-6">
              <Link
                href="/application?program=noorani&level=1"
                className="inline-flex items-center bg-islamic-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                <FileText className="h-5 w-5 mr-2" />
                Enroll Now
              </Link>
            </div>
          </div>

          {/* Level 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mr-4">
                2
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Level 2: Ampara (Juz 30) + Practical Tajweed</h2>
                <p className="text-gray-600">Intermediate Stage</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {level2Subjects.map((item, idx) => (
                <div key={idx} className="border-l-4 border-teal-600 pl-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.subject}</h3>
                  <p className="text-gray-700">{item.topics}</p>
                </div>
              ))}
            </div>
            <div className="border-t pt-6">
              <Link
                href="/application?program=noorani&level=2"
                className="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                <FileText className="h-5 w-5 mr-2" />
                Enroll Now
              </Link>
            </div>
          </div>

          {/* Level 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-teal-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mr-4">
                3
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Level 3: Complete Quran Reading + Academic Bridge</h2>
                <p className="text-gray-600">Advanced Stage</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {level3Subjects.map((item, idx) => (
                <div key={idx} className="border-l-4 border-teal-700 pl-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.subject}</h3>
                  <p className="text-gray-700">{item.topics}</p>
                </div>
              ))}
            </div>
            <div className="border-t pt-6">
              <Link
                href="/application?program=noorani&level=3"
                className="inline-flex items-center bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors"
              >
                <FileText className="h-5 w-5 mr-2" />
                Enroll Now
              </Link>
            </div>
          </div>

          {/* Completion Outcomes */}
          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <CheckCircle className="h-8 w-8 mr-3 text-islamic-green" />
              Completion Outcomes
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              After completing this Noorani curriculum, a student should be able to:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-islamic-green mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Read the entire Quran with proper Tajweed</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-islamic-green mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Know basic Islamic beliefs, practices, and manners</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-islamic-green mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Communicate at foundational level in Bangla and English</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-islamic-green mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Handle basic Math and general concepts appropriate for Class 5 level</span>
              </div>
            </div>
          </div>

          {/* Post-Completion Paths */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Target className="h-8 w-8 mr-3 text-islamic-green" />
              After Completing Noorani Program
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Upon successful completion of the Noorani Program, students have two pathways to continue their education:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Hifz Program Path */}
              <div className="border-2 border-teal-600 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-700 p-3 rounded-lg mr-4">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Hifz Program</h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Students who wish to pursue Qur'an memorization can join our <strong>Hifz Program</strong>. 
                  This program focuses on complete memorization of the Holy Qur'an with proper Tajweed.
                </p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Complete memorization of 30 Juz</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Strong retention system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-700 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Proper Tajweed application</span>
                  </li>
                </ul>
                <Link
                  href="/courses/hifz"
                  className="inline-flex items-center bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors"
                >
                  Learn More About Hifz Program
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>

              {/* Public School Path */}
              <div className="border-2 border-islamic-green rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-islamic-green p-3 rounded-lg mr-4">
                    <School className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Public Primary School</h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Students who prefer to continue in the general education system can join <strong>Class 5</strong> 
                  in a nearby public primary school. Our Noorani Program prepares students with the necessary 
                  academic foundation for this transition.
                </p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-islamic-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Admission to Class 5 in primary school</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-islamic-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Strong foundation in Bangla, English, and Math</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-islamic-green mr-2 mt-0.5 flex-shrink-0" />
                    <span>Support in finding nearby public schools</span>
                  </li>
                </ul>
                <div className="bg-islamic-light p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Our institution provides guidance and support to help students find 
                    suitable public primary schools in their area for Class 5 admission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

