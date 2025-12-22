import Link from "next/link";
import { BookOpen, Users, GraduationCap, Heart, Star, Award, Target, Shield } from "lucide-react";
import PhotoCarousel from "@/components/PhotoCarousel";

export default function Home() {
  const coreValues = [
    { name: "Ikhlas", meaning: "Sincerity", icon: Heart },
    { name: "Dawah", meaning: "Propagation", icon: BookOpen },
    { name: "Taleem", meaning: "Education", icon: GraduationCap },
    { name: "Ibadah", meaning: "Worship", icon: Star },
    { name: "Khidmat", meaning: "Service", icon: Users },
    { name: "Tarbiyat", meaning: "Upbringing", icon: Award },
    { name: "Hidayah", meaning: "Guidance", icon: Target },
    { name: "Taqwa", meaning: "Piety", icon: Shield },
    { name: "Deen", meaning: "Religion", icon: BookOpen },
    { name: "Amanah", meaning: "Trustworthiness", icon: Shield },
  ];

  const highlights = [
    {
      icon: Users,
      title: "Support for Orphans",
      description: "Free education and care for orphaned students, transforming their lives through Islamic education.",
    },
    {
      icon: BookOpen,
      title: "Qur'anic Education",
      description: "Special focus on memorization and understanding of the Holy Qur'an with proper Tajweed.",
    },
    {
      icon: Award,
      title: "Moral Education",
      description: "Training in moral values, human ethics, and Islamic ideals to develop ideal citizens.",
    },
    {
      icon: GraduationCap,
      title: "Residential Facilities",
      description: "Safe and clean residential accommodations for students to focus on their studies.",
    },
    {
      icon: Heart,
      title: "Social Responsibility",
      description: "Contributing to poverty alleviation and educational empowerment in society.",
    },
    {
      icon: Target,
      title: "Balanced Education",
      description: "Integration of general education alongside religious education for better career prospects.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-islamic-green via-teal-700 to-islamic-dark text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="arabic-text text-4xl md:text-5xl">مدينة العلوم</span>
                <br />
                Madinatul Uloom
              </h1>
              <p className="text-2xl md:text-3xl font-semibold">Madrasa & Orphanage</p>
              <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto md:mx-0">
                An Islamic Educational Institution Serving Orphans and Underprivileged Children
              </p>
              <p className="text-lg text-teal-50 max-w-2xl mx-auto md:mx-0">
                Kaya Kori (Baligange Bazar), Nakla, Sherpur, Mymensingh, Bangladesh
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
                <Link
                  href="/donate"
                  className="bg-white text-islamic-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Support Our Mission
                </Link>
                <Link
                  href="/about"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-islamic-green transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            {/* Right Side - Photo Carousel */}
            <div className="w-full h-full flex items-center justify-center">
              <PhotoCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Core Principles</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Guided by fundamental Islamic values and character traits
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.name}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <Icon className="h-10 w-10 mx-auto mb-3 text-islamic-green" />
                  <h3 className="font-bold text-gray-900 mb-1">{value.name}</h3>
                  <p className="text-sm text-gray-600">{value.meaning}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Key Highlights</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover what makes Madinatul Uloom a source of inspiration and hope
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="bg-gradient-to-br from-islamic-light to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-islamic-green/20"
                >
                  <Icon className="h-12 w-12 text-islamic-green mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gradient-to-br from-islamic-green to-islamic-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg leading-relaxed mb-4">
                To provide free Islamic and moral education to orphans and poor children, ensuring they receive
                comprehensive education based on Qur'anic and Sunnah principles.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Objectives</h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Free Islamic and moral education for orphans and poor children</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Qur'an memorization (Hifz) and related Islamic knowledge</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Safe housing, food, clothing, and medical care</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Promote a peaceful, righteous society through Islamic teachings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Join Us in Making a Difference</h2>
          <p className="text-xl text-gray-700 mb-8">
            Your support helps us provide education, care, and hope to orphaned and underprivileged children.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-islamic-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg text-lg"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="bg-white border-2 border-islamic-green text-islamic-green px-8 py-4 rounded-lg font-semibold hover:bg-islamic-light transition-colors text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

