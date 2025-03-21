import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, X, Building2, Ruler, Building, Award, CheckCircle2, Users, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import t1 from '../assets/images/t1.jpg';
import t3 from '../assets/images/t3.jpg';
import t4 from '../assets/images/t4.jpg';
import t5 from '../assets/images/t5.jpg';
import t6 from '../assets/images/t6.jpg';
import t7 from '../assets/images/t7.jpg';
import q1 from '../assets/images/q1.jpg';
import full5 from '../assets/images/full5.jpg';
import qq5 from '../assets/images/qq5.jpg';
import tt1 from '../assets/images/tt1.jpg';
import ee3 from '../assets/images/ee3.jpg';
import house2 from '../assets/images/house2.jpg';
import pou3 from '../assets/images/pou3.jpg';
import con2 from '../assets/images/con2.jpg';
import ik4 from '../assets/images/ik4.jpg';
import aa1 from '../assets/images/aa1.jpg';
import qq3 from '../assets/images/qq3.jpg';
import lop from '../assets/images/lop.png';
import lop2 from '../assets/images/lop2.jpg';
import ad from '../assets/images/ad.jpg';
import af from '../assets/images/af.jpg';
import ag from '../assets/images/ag.jpg';
import ah from '../assets/images/ah.jpg';
import aj from '../assets/images/aj.jpg';
import ak from '../assets/images/ak.jpg';
import al from '../assets/images/al.jpg';
import as1 from '../assets/images/as.jpg';
import m from '../assets/images/m.jpg';
import n from '../assets/images/n.jpg';
import b from '../assets/images/b.jpg';
import v from '../assets/images/v.jpg';
import c from '../assets/images/c.jpg';
import x from '../assets/images/x.jpg';
import z from '../assets/images/z.jpg';
import f1 from '../assets/images/f1.jpg';
import f2 from '../assets/images/f2.jpg';
import f3 from '../assets/images/f3.jpg';
import to from '../assets/images/to.png';
import to1 from '../assets/images/to1.jpg';
import t2 from '../assets/images/t2.jpg';
import t8 from '../assets/images/t8.jpg';
import t9 from '../assets/images/t9.jpg';
import t10 from '../assets/images/t10.jpg';
import VelvetSkins2 from '../assets/images/VelvetSkins2.jpg';
import VelvetSkins3 from '../assets/images/VelvetSkins3.jpg';
import VelvetSkins4 from '../assets/images/VelvetSkins4.jpg';
import VelvetSkins5 from '../assets/images/VelvetSkins5.jpg';
import VelvetSkins6 from '../assets/images/VelvetSkins6.jpg';
import VelvetSkins7 from '../assets/images/VelvetSkins7.jpg';
import VelvetSkins8 from '../assets/images/VelvetSkins8.jpg';
import VelvetSkins9 from '../assets/images/VelvetSkins9.jpg';
import VelvetSkins10 from '../assets/images/VelvetSkins10.jpg';
import VelvetSkins11 from '../assets/images/VelvetSkins11.jpg';
import VelvetSkins12 from '../assets/images/VelvetSkins12.jpg';
import VelvetSkins13 from '../assets/images/VelvetSkins13.jpg';
import VelvetSkins14 from '../assets/images/VelvetSkins14.jpg';
import VelvetSkins15 from '../assets/images/VelvetSkins15.jpg';
import VelvetSkins16 from '../assets/images/VelvetSkins16.jpg';
import houseMaroneia from '../assets/images/houseMaroneia.jpg';
import houseMaroneia2 from '../assets/images/houseMaroneia2.jpg';
import houseMaroneia3 from '../assets/images/houseMaroneia3.jpg';
import houseMaroneia4 from '../assets/images/houseMaroneia4.jpg';
import houseMaroneia5 from '../assets/images/houseMaroneia5.jpg';
import threeStorybuilding from '../assets/images/three-storybuilding.jpg';
import threeStorybuilding2 from '../assets/images/three-storybuilding2.jpg';
import threeStorybuilding3 from '../assets/images/three-storybuilding3.jpg';
import threeStorybuilding4 from '../assets/images/three-storybuilding4.jpg';
import roofdetachedhouse from '../assets/images/roofdetachedhouse.jpg';
import roofdetachedhouse2 from '../assets/images/roofdetachedhouse2.jpg';
import roofdetachedhouse3 from '../assets/images/roofdetachedhouse3.jpg';
import roofdetachedhouse4 from '../assets/images/roofdetachedhouse4.jpg';
import roofdetachedhouse5 from '../assets/images/roofdetachedhouse5.jpg';
import roofdetachedhouse6 from '../assets/images/roofdetachedhouse6.jpg';
import groundFloorHolidayHomes from '../assets/images/ground-floor_holiday_homes.jpg';
import groundFloorHolidayHomes2 from '../assets/images/ground-floor_holiday_homes2.jpg';
import groundFloorHolidayHomes3 from '../assets/images/ground-floor_holiday_homes3.jpg';
import groundFloorHolidayHomes4 from '../assets/images/ground-floor_holiday_homes4.jpg';
import groundFloorHolidayHomes5 from '../assets/images/ground-floor_holiday_homes5.jpg';
import groundFloorHolidayHomes6 from '../assets/images/ground-floor_holiday_homes6.jpg';
import groundFloorHolidayHomes7 from '../assets/images/ground-floor_holiday_homes7.jpg';
import houseAtArogiRodopi from '../assets/images/house_at_Arogi_Rodopi.jpg';
import houseAtArogiRodopi2 from '../assets/images/house_at_Arogi_Rodopi2.jpg';
import houseAtArogiRodopi3 from '../assets/images/house_at_Arogi_Rodopi3.jpg';
import houseAtArogiRodopi4 from '../assets/images/house_at_Arogi_Rodopi4.jpg';
import houseAtArogiRodopi5 from '../assets/images/house_at_Arogi_Rodopi5.jpg';
import houseAtArogiRodopi6 from '../assets/images/house_at_Arogi_Rodopi6.jpg';
import houseAtArogiRodopi7 from '../assets/images/house_at_Arogi_Rodopi7.jpg';
import houseAtArogiRodopi8 from '../assets/images/house_at_Arogi_Rodopi8.jpg';
import houseAtArogiRodopi9 from '../assets/images/house_at_Arogi_Rodopi9.jpg';
import houseAtArogiRodopi10 from '../assets/images/house_at_Arogi_Rodopi10.jpg';

type ProjectKey = `project${number}`;

interface CurrentSlides {
  [key: ProjectKey]: number;
}

interface ProjectImages {
  [key: ProjectKey]: string[];
}

const certifications = {
  el: {
    column1: [
      'Πιστοποιημένος Ελεγκτής Δόμησης. Για έργα της μεγαλύτερης κατηγορίας.',
      'Πιστοποιημένος Επιθεωρητής Καταλυμάτων. Για κατηγοριοποίηση ξενοδοχειακών μονάδων (αστεροποίηση) και ενοικιαζόμενων δωματίων (κλειδιά) από την <strong>TÜV Austria</strong>.',
      'Εμπειρία στις <strong>Εκτιμήσεις Ακινήτων</strong>, με συνεργασίες με διάφορες τράπεζες (Πανελλήνια, Ασπίς, Αγροτική, Πειραιώς).',
      'Πιστοποίηση <strong>ISO/IEC 17024</strong>.',
      'Διεκπεραίωση προγράμματος "<strong>Εξοικονομώ κατ\' Οίκον</strong>".',
      '<strong>Expert Valuer in Real Estate Property (REV) – TEGoVA</strong>.',
      'Πιστοποιημένη Εκτιμήτρια Ακινήτων, διεξάγοντας εκτιμήσεις σύμφωνα με τα Ευρωπαϊκά Πρότυπα.'
    ],
    column2: [
      '<strong>ΜΕΛΟΣ ΕΠΑΓΓΕΛΜΑΤΙΚΩΝ ΟΡΓΑΝΙΣΜΩΝ</strong>',
      'Εξειδίκευση σε <strong>Ενεργειακές Μελέτες και Επιθεωρήσεις</strong> βάσει <strong>ΚΕΝΑΚ</strong>.',
      'Μέλος του <strong>Συλλόγου Εκτιμητών Ελλάδος (Σ.ΕΚ.Ε.)</strong>.',
      'Συμμετοχή στην <strong>TEGoVA</strong>.',
      'Εντεταλμένος Χορηγός <strong>REV</strong> της <strong>TEGoVA</strong>.'
    ]
  },
  en: {
    column1: [
      'Certified Building Inspector. For projects of the highest category.',
      'Certified Accommodation Inspector. For categorization of hotel units (star rating) and rental rooms (keys) by <strong>TÜV Austria</strong>.',
      'Experience in <strong>Real Estate Valuations</strong>, with collaborations with various banks (Panellinia, Aspis, Agricultural, Piraeus).',
      'Certification <strong>ISO/IEC 17024</strong>.',
      'Implementation of "<strong>Energy Saving at Home</strong>" program.',
      '<strong>Expert Valuer in Real Estate Property (REV) – TEGoVA</strong>.',
      'Certified Real Estate Appraiser, conducting valuations in accordance with European Standards.'
    ],
    column2: [
      '<strong>MEMBER OF PROFESSIONAL ORGANIZATIONS</strong>',
      'Specialization in <strong>Energy Studies and Inspections</strong> based on <strong>KENAK</strong>.',
      'Member of the <strong>Hellenic Valuers Association (HVA)</strong>.',
      'Participation in <strong>TEGoVA</strong>.',
      'Designated <strong>REV</strong> Sponsor of <strong>TEGoVA</strong>.'
    ]
  }
};

const Home = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentSlides, setCurrentSlides] = useState<CurrentSlides>({
    project1: 0,
    project2: 0,
    project3: 0,
    project4: 0,
    project5: 0,
    project6: 0,
    project7: 0,
    project8: 0,
    project9: 0,
    project10: 0,
    project11: 0,
    project12: 0
  });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  const projectImages: ProjectImages = {
    project1: [lop, lop2],
    project2: [ad, af, ag, ah, aj, ak, al, as1],
    project3: [m, n, b, v, c, x, z],
    project4: [f1, f2, f3],
    project5: [to, to1],
    project6: [t1, t10, t2, t3, t4, t5, t6, t7, t8, t9],
    project7: [
      VelvetSkins2, VelvetSkins3, VelvetSkins4, VelvetSkins5, 
      VelvetSkins6, VelvetSkins7, VelvetSkins8, VelvetSkins9,
      VelvetSkins10, VelvetSkins11, VelvetSkins12, VelvetSkins13,
      VelvetSkins14, VelvetSkins15, VelvetSkins16
    ],
    project8: [houseMaroneia, houseMaroneia2, houseMaroneia3, houseMaroneia4, houseMaroneia5],
    project9: [threeStorybuilding, threeStorybuilding2, threeStorybuilding3, threeStorybuilding4],
    project10: [roofdetachedhouse, roofdetachedhouse2, roofdetachedhouse3, roofdetachedhouse4, roofdetachedhouse5, roofdetachedhouse6],
    project11: [groundFloorHolidayHomes, groundFloorHolidayHomes2, groundFloorHolidayHomes3, groundFloorHolidayHomes4, groundFloorHolidayHomes5, groundFloorHolidayHomes6, groundFloorHolidayHomes7],
    project12: [
      houseAtArogiRodopi, houseAtArogiRodopi2, houseAtArogiRodopi3, 
      houseAtArogiRodopi4, houseAtArogiRodopi5, houseAtArogiRodopi6,
      houseAtArogiRodopi7, houseAtArogiRodopi8, houseAtArogiRodopi9,
      houseAtArogiRodopi10
    ]
  };

  const handlePrevSlide = (project: ProjectKey, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlides(prev => ({
      ...prev,
      [project]: prev[project] === 0 ? projectImages[project].length - 1 : prev[project] - 1
    }));
  };

  const handleNextSlide = (project: ProjectKey, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlides(prev => ({
      ...prev,
      [project]: prev[project] === projectImages[project].length - 1 ? 0 : prev[project] + 1
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Project Management Section */}
      <div className="py-16 relative bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${qq3})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {language === 'el' 
              ? 'Ολοκληρωμένη Διαχείριση Έργων & Αρχιτεκτονικός Σχεδιασμός' 
              : 'Complete Project Management & Architectural Design'}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Construction Management Card */}
                  <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">
                  {language === 'el' 
                    ? 'Διαχείριση Εργοταξίου & Έργων' 
                    : 'Construction Site & Project Management'}
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  language === 'el' ? 'Κοστολόγηση ανά στάδιο' : 'Stage-based cost estimation',
                  language === 'el' ? 'Χρονοπρογραμματισμός (Project Management)' : 'Time scheduling (Project Management)',
                  language === 'el' ? 'Επίβλεψη & στατικές ενισχύσεις' : 'Supervision & structural reinforcements'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
          </motion.div>

            {/* Architectural Design Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Ruler className="h-8 w-8 text-blue-600" />
        </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">
                  {language === 'el' 
                    ? 'Αρχιτεκτονικός Σχεδιασμός & Άδειες' 
                    : 'Architectural Design & Permits'}
                </h3>
      </div>
              <ul className="space-y-4">
                {[
                  language === 'el' ? 'Συμβουλευτική σε θέματα ακινήτων' : 'Consulting on property matters',
                  language === 'el' ? 'Άδειες για όλους τους τύπους έργων' : 'Permits for all project types',
                  language === 'el' ? 'Αρχιτεκτονικός σχεδιασμός & υλοποίηση' : 'Architectural design & implementation'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {language === 'el' ? 'Επικοινωνήστε μαζί μας' : 'Contact Us'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Selected Projects Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {language === 'el' ? 'Επιλεγμένα Έργα' : 'Selected Projects'}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
              <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              onClick={() => setSelectedProject(0)}
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src={projectImages.project1[currentSlides.project1]} 
                  alt="Νέο Έργο" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handlePrevSlide('project1', e)}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handleNextSlide('project1', e)}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'el' ? 'Νέο Έργο - Μονοκατοικία στις Σάπες' : 'New Project - House in Sapes'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'el' 
                    ? 'Νέο έργο υπό κατασκευή. Ανέγερση μονοκατοικίας στις Σάπες Ροδόπης.'
                    : 'New project under construction. House building in Sapes, Rodopi.'}
                </p>
              </div>
              </motion.div>

            {/* Project 2 */}
              <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              onClick={() => setSelectedProject(1)}
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src={projectImages.project2[currentSlides.project2]} 
                  alt="Μελέτη Ανέγερσης" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handlePrevSlide('project2', e)}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handleNextSlide('project2', e)}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'el' ? 'Μελέτη Ανέγερσης Ισόγειας Μονοκατοικίας' : 'Single Story House Construction Study'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'el'
                    ? 'Μελέτη ανέγερσης ισόγειας μονοκατοικίας με πρόβλεψη ορόφου. Φωτορεαλιστική απεικόνιση.'
                    : 'Construction study for a single-story house with provision for an additional floor. Photorealistic rendering.'}
                </p>
            </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(2)}
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src={projectImages.project3[currentSlides.project3]} 
                  alt="Προκατασκευασμένες Κατοικίες" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handlePrevSlide('project3', e)}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handleNextSlide('project3', e)}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'el' ? 'Προκατασκευασμένες Κατοικίες στον Προφήτη Ηλία' : 'Prefabricated Houses in Profitis Ilias'}
                  </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'el'
                    ? 'Νέο έργο σε εξέλιξη: Ανέγερση δύο όμοιων προκατασκευασμένων κατοικιών. Ολοκλήρωση βάσεων σκυροδέματος.'
                    : 'Ongoing project: Construction of two identical prefabricated houses. Completion of concrete foundations.'}
                </p>
              </div>
            </motion.div>

            {/* Project 4 - Μονοκατοικία στην Παραλία Αρωγής */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(3)}
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src={projectImages.project4[currentSlides.project4 || 0]} 
                  alt="Μονοκατοικία στην Παραλία Αρωγής" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handlePrevSlide('project4', e)}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handleNextSlide('project4', e)}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
          </div>
        </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'el' ? 'Μονοκατοικία στην Παραλία Αρωγής' : 'House in Arogi Beach'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'el' 
                    ? 'Αρχιτεκτονική μελέτη, Στατική μελέτη, ισόγειας μονοκατοικίας 50 τ.μ. με σοφίτα 25 τ.μ. σε οικόπεδο στην Παραλία Αρωγής Ροδόπης.'
                    : 'Architectural study, Static study, single-story house 50 sq.m. with 25 sq.m. loft in Arogi Beach, Rodopi.'}
                </p>
      </div>
            </motion.div>

            {/* Project 5 - Διώροφη Μονοκατοικία */}
          <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              onClick={() => setSelectedProject(4)}
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src={projectImages.project5[currentSlides.project5 || 0]} 
                  alt="Διώροφη Μονοκατοικία" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handlePrevSlide('project5', e)}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handleNextSlide('project5', e)}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'el' ? 'Διώροφη Μονοκατοικία με Σοφίτα στην Εκτενεπόλ' : 'Two-story House with Loft in Ektenepol'}
                </h3>
                <p className="text-gray-600 text-sm">
              {language === 'el' 
                    ? 'Ανέγερση διώροφου μονοκατοικίας με Σοφίτα- αρχιτεκτονική μελέτη- Εκτενεπόλ ΖΕΠ Κομοτηνής'
                    : 'Construction of a two-story house with loft - architectural study - Ektenepol ZEP Komotini'}
            </p>
              </div>
            </motion.div>

            {/* Project 6 - Πολυώροφα Κτίρια */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(5)}
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src={projectImages.project6[currentSlides.project6 || 0]} 
                  alt="Πολυώροφα Κτίρια" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handlePrevSlide('project6', e)}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handleNextSlide('project6', e)}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
        </div>
      </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'el' ? 'Πολυώροφα Κτίρια Κατοικιών στην Κομοτηνή' : 'Multi-story Residential Buildings in Komotini'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'el'
                    ? 'Past multi storey residential projects. Komotini.'
                    : 'Past multi storey residential projects. Komotini.'}
                </p>
              </div>
            </motion.div>

            {/* Project 7 - Velvet Skins */}
      <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
              onClick={() => setSelectedProject(6)}
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src={projectImages.project7[currentSlides.project7 || 0]} 
                  alt="Velvet Skins Laser and Face Center" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handlePrevSlide('project7', e)}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handleNextSlide('project7', e)}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'el' ? 'Velvet Skins Laser and Face Center Κομοτηνή' : 'Velvet Skins Laser and Face Center Komotini'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'el'
                    ? 'Αρχιτεκτονικός σχεδιασμός, Μελέτη, Πλήρης οργάνωση χρονοδιαγράμματος & Λειτουργική υλοποίηση. Νέος επαγγελματικός χώρος.'
                    : 'Architectural design, Study, Complete timeline organization & Functional implementation. New professional space.'}
                </p>
              </div>
            </motion.div>

            {/* Project 8 - Παραθαλασσιοι οικισμοι */}
          <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(7)}
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src={projectImages.project8[currentSlides.project8 || 0]} 
                  alt="Παραθαλασσιοι οικισμοι" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handlePrevSlide('project8', e)}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handleNextSlide('project8', e)}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'el' 
                    ? 'Παραθαλασσιοι οικισμοι στο Προφήτη Ηλία Δ.Μαρωνειας ΠΕ Ροδόπης' 
                    : 'Coastal settlements in Profitis Ilias, Maroneia, Rodopi'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'el'
                    ? 'Κατασκευή τριών παραθεριστικών κατοικιών στον παραθαλάσσιο οικισμό Προφήτη Ηλία Δ.Μαρωνειας ΠΕ Ροδόπης.- εξέλιξη κατασκευής.'
                    : 'Construction of three holiday homes in the coastal settlement of Profitis Ilias, Maroneia, Rodopi - construction progress.'}
                </p>
              </div>
          </motion.div>

            {/* Project 9 - Τριώροφη Οικοδομή */}
              <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              onClick={() => setSelectedProject(8)}
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src={projectImages.project9[currentSlides.project9 || 0]} 
                  alt="Τριώροφη Οικοδομή" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handlePrevSlide('project9', e)}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handleNextSlide('project9', e)}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'el' 
                    ? 'Ανέγερση τριωροφης οικοδομής' 
                    : 'Construction of three-story building'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'el'
                    ? 'Αρχιτεκτονική μελέτη- ανέγερση τριωροφου οικοδομής επι πυλωτής με υπόγειο και με Σοφιτα στην Κομοτηνη-περιοχή Σιδ/κου Σταθμου. Πρόκειται για ιδιωτικό έργο και δεν πωλουνται οι ιδιοκτησιες.'
                    : 'Architectural study - construction of a three-story building with pilotis, basement and loft in Komotini-Railway Station area. This is a private project and the properties are not for sale.'}
                </p>
                  </div>
                </motion.div>

            {/* Project 10 - Ισόγεια κεραμοσκεπης μονοκατοικία */}
                <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(9)}
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src={projectImages.project10[currentSlides.project10 || 0]} 
                  alt="Ισόγεια κεραμοσκεπης μονοκατοικία" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handlePrevSlide('project10', e)}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handleNextSlide('project10', e)}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'el' 
                    ? 'Iσόγεια κεραμοσκεπους μονοκατοικία στην Κομοτηνη' 
                    : 'Single-story tiled roof house in Komotini'}
                    </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'el'
                    ? 'Αποπεράτωση ισόγειας κεραμοσκεπους μονοκατοικίας στην Κομοτηνη.'
                    : 'Completion of a single-story tiled roof house in Komotini.'}
                    </p>
                  </div>
            </motion.div>

            {/* Project 11 - Παραθεριστικές κατοικίες Προφήτη Ηλία */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(10)}
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src={projectImages.project11[currentSlides.project11 || 0]} 
                  alt="Παραθεριστικές κατοικίες Προφήτη Ηλία" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handlePrevSlide('project11', e)}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handleNextSlide('project11', e)}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'el' 
                    ? 'Αποπεράτωση δυο ισόγειων παραθεριστικών κατοικιών στον παραθαλάσσιο οικισμό Προφήτη Ηλία Ροδοπης' 
                    : 'Completion of two ground-floor holiday homes in Profitis Ilias coastal settlement, Rodopi'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'el'
                    ? 'Μελέτη, επίβλεψη, κατασκευή, Αποπεράτωση δυο ισόγειων παραθεριστικών κατοικιών των 50 τμ. συμβατικής κατασκευής low budget στον παραθαλάσσιο οικισμό Προφήτη Ηλία Ροδοπης.'
                    : 'Study, supervision, construction, Completion of two 50 sq.m. ground-floor holiday homes of conventional low-budget construction in Profitis Ilias coastal settlement, Rodopi.'}
                </p>
                  </div>
                </motion.div>

            {/* Project 12 - Παραθεριστική Μονοκατοικία Αρωγής */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(11)}
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src={projectImages.project12[currentSlides.project12 || 0]} 
                  alt="Παραθεριστική Μονοκατοικία Αρωγής" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handlePrevSlide('project12', e)}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => handleNextSlide('project12', e)}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
          </div>
        </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'el' 
                    ? 'Ανεγερση ισογειας παραθεριστικης μονοκατοικιας στον οικισμο Αρωγης ΠΕ Ροδοπης' 
                    : 'Construction of a ground-floor holiday home in Arogi settlement, Rodopi'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'el'
                    ? 'Ανεγερση ισογειας παραθεριστικης μονοκατοικιας 65 τμ, σε οικοπεδο 220 τμ, στον οικισμο Αρωγης ΠΕ Ροδοπης.'
                    : 'Construction of a 65 sq.m. ground-floor holiday home on a 220 sq.m. plot in Arogi settlement, Rodopi.'}
                </p>
              </div>
      </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {language === 'el' ? 'Οι Υπηρεσίες μας' : 'Our Services'}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Architectural Services */}
              <motion.div
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'el' ? 'Αρχιτεκτονικές Υπηρεσίες' : 'Architectural Services'}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === 'el' 
                  ? 'Σχεδιασμός και υλοποίηση αρχιτεκτονικών έργων με καινοτόμες λύσεις'
                  : 'Design and implementation of architectural projects with innovative solutions'}
              </p>
              <Link
                to="/architectural-office"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                {language === 'el' ? 'Μάθετε περισσότερα' : 'Learn more'}
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
              </motion.div>

            {/* Engineering Services */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Ruler className="h-6 w-6 text-green-600" />
          </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'el' ? 'Υπηρεσίες Μηχανικού' : 'Engineering Services'}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === 'el'
                  ? 'Ολοκληρωμένες υπηρεσίες μηχανικού και τεχνικές μελέτες'
                  : 'Comprehensive engineering services and technical studies'}
              </p>
              <Link
                to="/engineering-services"
                className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
              >
                {language === 'el' ? 'Μάθετε περισσότερα' : 'Learn more'}
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </motion.div>

            {/* Real Estate Services */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'el' ? 'Διαχείριση Ακινήτων' : 'Real Estate Management'}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === 'el'
                  ? 'Επαγγελματική διαχείριση και αξιοποίηση ακινήτων'
                  : 'Professional real estate management and development'}
              </p>
              <Link
                to="/portfolio"
                className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
              >
                {language === 'el' ? 'Μάθετε περισσότερα' : 'Learn more'}
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
            {language === 'el' ? 'Πιστοποιήσεις' : 'Certifications'}
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Certifications Card */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">
                  {language === 'el' ? 'Επαγγελματικές Πιστοποιήσεις' : 'Professional Certifications'}
                </h3>
              </div>
              <ul className="space-y-4">
                {certifications[language].column1.map((cert, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start space-x-3 text-gray-700"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span 
                      className="text-base leading-relaxed" 
                      dangerouslySetInnerHTML={{ __html: cert }}
                    />
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Professional Memberships Card */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">
                  {language === 'el' ? 'Επαγγελματικές Συμμετοχές' : 'Professional Memberships'}
                </h3>
              </div>
              <ul className="space-y-4">
                {certifications[language].column2.map((cert, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start space-x-3 text-gray-700"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span 
                      className="text-base leading-relaxed" 
                      dangerouslySetInnerHTML={{ __html: cert }}
                    />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {language === 'el' ? 'Μάθετε περισσότερα για εμάς' : 'Learn more about us'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;