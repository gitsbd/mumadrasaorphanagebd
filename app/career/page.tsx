import { Briefcase, GraduationCap, Users, Clock, MapPin, Mail, CheckCircle, BookOpen, Award } from "lucide-react";
import Link from "next/link";

export default function Career() {
  const teacherPositions = [
    {
      title: "Qur'an Teacher (Hifz)",
      department: "Hifz Department",
      type: "Full-time",
      requirements: [
        "Certified Hafiz-ul-Qur'an with strong Tajweed knowledge",
        "Minimum 3-5 years of Hifz teaching experience",
        "Ability to mentor orphan and vulnerable students",
        "Patience, discipline, and exemplary Islamic character",
        "Strong communication skills in Bangla and Arabic",
      ],
      responsibilities: [
        "Teach Qur'an memorization (Hifz) to students",
        "Apply proper Tajweed rules during instruction",
        "Maintain student progress records and assessments",
        "Conduct daily and weekly revision sessions",
        "Provide guidance and support to students",
      ],
    },
    {
      title: "Noorani Program Teacher",
      department: "Noorani Department",
      type: "Full-time",
      requirements: [
        "Strong knowledge of Noorani Qaida and Tajweed basics",
        "Experience teaching foundational Islamic education",
        "Ability to teach Bangla, English, and basic Math",
        "Patience with young children (ages 4-8)",
        "Understanding of integrated curriculum approach",
      ],
      responsibilities: [
        "Teach Noorani Qaida and basic Arabic",
        "Instruct students in basic Islamic studies",
        "Teach foundational Bangla, English, and Math",
        "Monitor student progress across all subjects",
        "Maintain classroom discipline and Islamic environment",
      ],
    },
    {
      title: "Islamic Studies Teacher",
      department: "Islamic Studies Department",
      type: "Full-time",
      requirements: [
        "Degree in Islamic Studies (Alim/Dawrah preferred)",
        "Strong knowledge of Aqeedah, Fiqh, Seerah, and Hadith",
        "Experience teaching Islamic subjects",
        "Ability to explain complex concepts simply",
        "Commitment to Islamic values and principles",
      ],
      responsibilities: [
        "Teach Islamic Studies curriculum",
        "Cover Aqeedah, Fiqh, Seerah, and Hadith",
        "Develop lesson plans and teaching materials",
        "Assess student understanding and progress",
        "Serve as a role model for students",
      ],
    },
    {
      title: "General Education Teacher",
      department: "General Education Department",
      type: "Full-time",
      requirements: [
        "Bachelor's degree in relevant subject (Bangla, English, Math, or General Knowledge)",
        "Teaching experience preferred",
        "Ability to integrate Islamic values in teaching",
        "Understanding of child development",
        "Commitment to orphan education",
      ],
      responsibilities: [
        "Teach Bangla, English, Math, or General Knowledge",
        "Develop age-appropriate lesson plans",
        "Assess and track student progress",
        "Create engaging learning activities",
        "Support overall student development",
      ],
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Competitive Salary",
      description: "Attractive compensation package based on qualifications and experience",
    },
    {
      icon: Users,
      title: "Supportive Environment",
      description: "Work in a caring community dedicated to Islamic education and orphan welfare",
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Opportunities for training and skill enhancement",
    },
    {
      icon: BookOpen,
      title: "Meaningful Work",
      description: "Make a real difference in the lives of orphaned and underprivileged children",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-islamic-green to-teal-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Briefcase className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Career Opportunities</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Join our mission to provide quality Islamic education to orphaned and underprivileged children
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Join Our Team</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Madinatul Uloom Madrasa & Orphanage is seeking dedicated and qualified teachers who are passionate 
              about Islamic education and committed to making a difference in the lives of orphaned and underprivileged 
              children. We offer a supportive work environment where you can contribute to building a better future 
              through education.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our institution values teachers who embody Islamic principles, demonstrate patience and compassion, and 
              are committed to excellence in education. If you share our vision and values, we encourage you to apply.
            </p>
          </div>

          {/* Available Positions */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Available Positions</h2>
            <div className="space-y-6">
              {teacherPositions.map((position, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-2 text-islamic-green" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-islamic-green" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="text-islamic-green mr-2 mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-gray-900 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-teal-600" />
                        Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="text-teal-600 mr-2 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Why Work With Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                    <div className="bg-islamic-green p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-gradient-to-br from-islamic-light to-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">How to Apply</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-islamic-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Prepare Your Application</h3>
                  <p className="text-gray-700">
                    Prepare your CV/resume, educational certificates, and any relevant teaching certifications. 
                    Include a cover letter explaining your interest in joining our institution.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-islamic-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Submit Application</h3>
                  <p className="text-gray-700">
                    Send your application via email to{" "}
                    <a href="mailto:mu.madrasaorphanage.bd@gmail.com" className="text-islamic-green hover:underline">
                      mu.madrasaorphanage.bd@gmail.com
                    </a>{" "}
                    with the subject line "Teacher Application - [Position Title]".
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-islamic-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Interview Process</h3>
                  <p className="text-gray-700">
                    Shortlisted candidates will be contacted for an interview. The interview may include a 
                    demonstration lesson or teaching assessment.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-islamic-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Selection and Onboarding</h3>
                  <p className="text-gray-700">
                    Selected candidates will be notified and provided with onboarding information and orientation 
                    about our institution's values, policies, and teaching methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact for Application */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Apply Now</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 text-center">
                Ready to make a difference? Send your application to:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-6 w-6 text-islamic-green" />
                  <a
                    href="mailto:mu.madrasaorphanage.bd@gmail.com"
                    className="text-xl font-semibold text-islamic-green hover:underline"
                  >
                    mu.madrasaorphanage.bd@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="h-6 w-6 text-islamic-green" />
                  <span className="text-gray-700 text-center">
                    Kaya Kori (Baligange Bazar), Nakla,<br />
                    Sherpur, Mymensingh, Bangladesh
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-6 w-6 text-islamic-green" />
                  <div className="text-gray-700 text-center">
                    <a href="tel:+8801728018014" className="hover:text-islamic-green transition-colors block">
                      +88 01728 018014
                    </a>
                    <a href="tel:+8801791206098" className="hover:text-islamic-green transition-colors block">
                      +88 01791206098
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link
                  href="/contact"
                  className="inline-block bg-islamic-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                >
                  Contact Us for More Information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

