import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Ruler, PencilRuler, Building2, Compass, CheckCircle2, X, ArrowRight, Award, Building } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';
import f1 from '../assets/images/f1.jpg';
import f2 from '../assets/images/f2.jpg';
import f3 from '../assets/images/f3.jpg';
import to from '../assets/images/to.png';
import to1 from '../assets/images/to1.jpg';
import t1 from '../assets/images/t1.jpg';
import t2 from '../assets/images/t2.jpg';
import t3 from '../assets/images/t3.jpg';
import t4 from '../assets/images/t4.jpg';
import t5 from '../assets/images/t5.jpg';
import t6 from '../assets/images/t6.jpg';
import t7 from '../assets/images/t7.jpg';
import t8 from '../assets/images/t8.jpg';
import t9 from '../assets/images/t9.jpg';
import t10 from '../assets/images/t10.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import z from '../assets/images/z.jpg';
import x from '../assets/images/x.jpg';
import c from '../assets/images/c.jpg';
import v from '../assets/images/v.jpg';
import b from '../assets/images/b.jpg';
import n from '../assets/images/n.jpg';
import m from '../assets/images/m.jpg';
import as from '../assets/images/as.jpg';
import ad from '../assets/images/ad.jpg';
import af from '../assets/images/af.jpg';
import ag from '../assets/images/ag.jpg';
import ah from '../assets/images/ah.jpg';
import aj from '../assets/images/aj.jpg';
import ak from '../assets/images/ak.jpg';
import al from '../assets/images/al.jpg';
import lop from '../assets/images/lop.png';
import lop2 from '../assets/images/lop2.jpg';
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
import { Link } from 'react-router-dom';

interface ServiceItem {
  title: string;
  description: string;
  link?: string;
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  currentSlide?: number;
  slideCount?: number;
}

// Custom arrow components
const NextArrow = ({ onClick, currentSlide, slideCount, ...props }: ArrowProps) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-transparent border-none"
    aria-label="Next slide"
    {...props}
  >
    <ChevronRight className="w-12 h-12 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all" />
  </button>
);

const PrevArrow = ({ onClick, currentSlide, slideCount, ...props }: ArrowProps) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-transparent border-none"
    aria-label="Previous slide"
    {...props}
  >
    <ChevronLeft className="w-12 h-12 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all" />
  </button>
);

// Ενημέρωση του interface Settings
interface Settings extends React.ComponentProps<typeof Slider> {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  nextArrow?: JSX.Element;
  prevArrow?: JSX.Element;
  customPaging?: (i: number) => JSX.Element;
  className?: string;
  initialSlide?: number;
  arrows?: boolean;
}

const ArchitecturalOffice = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = {
    el: [
      {
        title: 'Αρχιτεκτονικός Σχεδιασμός',
        description: 'Σχεδιασμός κτιρίων με έμφαση στην αισθητική και λειτουργικότητα',
        link: '/architectural-design'
      },
      {
        title: 'Εσωτερική Διακόσμηση',
        description: 'Σχεδιασμός εσωτερικών χώρων με αισθητική και λειτουργικότητα',
        link: '/interior-design'
      },
      {
        title: 'Μελέτες Κατασκευής',
        description: 'Λεπτομερείς μελέτες για την άρτια υλοποίηση του έργου',
        link: '/blog'
      },
      {
        title: 'Ανακαινίσεις',
        description: 'Ανανέωση και αναβάθμιση υφιστάμενων χώρων',
        link: '/renovations'
      }
    ],
    en: [
      {
        title: 'Architectural Design',
        description: 'Building design with emphasis on aesthetics and functionality',
        link: '/architectural-design'
      },
      {
        title: 'Interior Design',
        description: 'Interior space design with aesthetics and functionality',
        link: '/interior-design'
      },
      {
        title: 'Construction Studies',
        description: 'Detailed studies for the proper implementation of the project',
        link: '/blog'
      },
      {
        title: 'Renovations',
        description: 'Renovation and upgrading of existing spaces',
        link: '/renovations'
      }
    ]
  };

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Σύγχρονη Κατοικία',
      location: 'Κομοτηνή',
      type: 'Κατοικία'
    },
    {
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Εμπορικό Συγκρότημα',
      location: 'Αλεξανδρούπολη',
      type: 'Εμπορικό'
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      title: 'Πολυτελές Διαμέρισμα',
      location: 'Καβάλα',
      type: 'Κατοικία'
    }
  ];

  const selectedProjects = [
    {
      id: 1,
      title: {
        el: 'Νέο Έργο - Μονοκατοικία στις Σάπες',
        en: 'New Project - House in Sapes'
      },
      description: {
        el: `Νέο έργο υπό κατασκευή. Ανέγερση μονοκατοικίας στις Σάπες Ροδόπης.

@yiannismavridis, @ΝικηΜαυριδου

#αρχιτεκτονικοσσχεδιασμος #στατικημελετη #επιβλεψηεργου #κατασκευηεργου #maronia #fanari #komotini`,
        en: `New project under construction. House construction in Sapes, Rodopi.

@yiannismavridis, @NikiMavridou

#architecturaldesign #structuraldesign #constructionsupervision #construction #maronia #fanari #komotini`
      },
      images: [lop, lop2]
    },
    {
      id: 2,
      title: {
        el: 'Μελέτη Ανέγερσης Ισόγειας Μονοκατοικίας',
        en: 'Single-Story House Construction Study'
      },
      description: {
        el: `Μελέτη ανέγερσης ισόγειας μονοκατοικίας με πρόβλεψη ορόφου. Φωτορεαλιστική απεικόνιση: μελέτη ανέγερσης ισόγειας μονοκατοικίας με πρόβλεψη ορόφου.`,
        en: `Construction study of a single-story house with provision for an additional floor. Photorealistic visualization: construction study of a single-story house with future floor provision.`
      },
      images: [as, ad, af, ag, ah, aj, ak, al]
    },
    {
      id: 3,
      title: {
        el: 'Προκατασκευασμένες Κατοικίες στον Προφήτη Ηλία',
        en: 'Prefabricated Houses in Profitis Ilias'
      },
      description: {
        el: `Νέο έργο σε εξέλιξη: «Ανέγερση δύο όμοιων προκατασκευασμένων κατοικιών στον παραθεριστικό οικισμό Προφήτη Ηλία Δήμου Μαρώνειας Σαπών, ΠΕ Ροδόπης». Ολοκλήρωση βάσεων σκυροδέματος και εν αναμονή του μεταλλικού σκελετού κατοικιών.

Maroneia, Rodopi, Μαρώνεια, Προφήτης Ηλίας Ροδόπης

#αρχιτεκτονικοσσχεδιασμος #στατικημελετη #επιβλεψηεργου #κατασκευηεργου`,
        en: `New project in progress: "Construction of two identical prefabricated houses in the holiday settlement of Profitis Ilias, Municipality of Maroneia Sapon, Rodopi". Completion of concrete foundations and awaiting the metal frame of the houses.`
      },
      images: [z, x, c, v, b, n, m]
    },
    {
      id: 4,
      title: {
        el: 'Μονοκατοικία στην Παραλία Αρωγής',
        en: 'House in Arogi Beach'
      },
      description: {
        el: `Aρχιτεκτονική μελέτη, Στατική μελέτη, ισόγειας μονοκατοικίας 50 τμ. με σοφίτα 25 τμ. σε οικόπεδο στην Παραλία Αρωγής Ροδόπης.`,
        en: `Architectural and structural study of a 50 sq.m. single-story house with a 25 sq.m. loft in Arogi Beach, Rodopi.`
      },
      images: [f1, f2, f3]
    },
    {
      id: 5,
      title: {
        el: 'Διώροφη Μονοκατοικία με Σοφίτα στην Εκτενεπόλ',
        en: 'Two-story House with Attic in Ektenepol'
      },
      description: {
        el: 'Ανέγερση διώροφου μονοκατοικίας με Σοφιτα- αρχιτεκτονική μελέτη- Εκτενεπολ ΖΕΠ Κομοτηνης',
        en: 'Construction of a two-story house with attic - architectural study - Ektenepol ZEP Komotini'
      },
      images: [to, to1]
    },
    {
      id: 6,
      title: {
        el: 'Πολυώροφα Κτίρια Κατοικιών στην Κομοτηνή',
        en: 'Past Multi Storey Residential Projects in Komotini'
      },
      description: {
        el: 'Past multi storey residential projects. Komotini.',
        en: 'Past multi storey residential projects. Komotini.'
      },
      images: [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10]
    },
    {
      title: {
        el: 'Velvet Skins Laser and Face Center Κομοτηνή',
        en: 'Velvet Skins Laser and Face Center Komotini'
      },
      description: {
        el: 'Αρχιτεκτονικός σχεδιασμός, Μελέτη, Πλήρης οργάνωση χρονοδιαγράμματος & Λειτουργική υλοποίηση. Νέος επαγγελματικός χώρος.',
        en: 'Architectural design, Study, Complete timeline organization & Functional implementation. New professional space.'
      },
      images: [VelvetSkins2, VelvetSkins3, VelvetSkins4, VelvetSkins5, VelvetSkins6, VelvetSkins7, VelvetSkins8, VelvetSkins9, VelvetSkins10, VelvetSkins11, VelvetSkins12, VelvetSkins13, VelvetSkins14, VelvetSkins15, VelvetSkins16]
    },
    {
      title: {
        el: 'Παραθαλασσιοι οικισμοι στο Προφήτη Ηλία Δ.Μαρωνειας ΠΕ Ροδόπης',
        en: 'Coastal settlements in Profitis Ilias, Maroneia, Rodopi'
      },
      description: {
        el: 'Κατασκευή τριών παραθεριστικών κατοικιών στον παραθαλάσσιο οικισμό Προφήτη Ηλία Δ.Μαρωνειας ΠΕ Ροδόπης.- εξέλιξη κατασκευής.',
        en: 'Construction of three holiday homes in the coastal settlement of Profitis Ilias, Maroneia, Rodopi - construction progress.'
      },
      images: [houseMaroneia, houseMaroneia2, houseMaroneia3, houseMaroneia4, houseMaroneia5]
    },
    {
      title: {
        el: 'Ανέγερση τριωροφης οικοδομής',
        en: 'Construction of three-story building'
      },
      description: {
        el: 'Αρχιτεκτονική μελέτη- ανέγερση τριωροφου οικοδομής επι πυλωτής με υπόγειο και με Σοφιτα στην Κομοτηνη-περιοχή Σιδ/κου Σταθμου. Πρόκειται για ιδιωτικό έργο και δεν πωλουνται οι ιδιοκτησιες.',
        en: 'Architectural study - construction of a three-story building with pilotis, basement and loft in Komotini-Railway Station area. This is a private project and the properties are not for sale.'
      },
      images: [threeStorybuilding, threeStorybuilding2, threeStorybuilding3, threeStorybuilding4]
    },
    {
      title: {
        el: 'Iσόγεια κεραμοσκεπους μονοκατοικία στην Κομοτηνη',
        en: 'Single-story tiled roof house in Komotini'
      },
      description: {
        el: 'Αποπεράτωση ισόγειας κεραμοσκεπους μονοκατοικίας στην Κομοτηνη.',
        en: 'Completion of a single-story tiled roof house in Komotini.'
      },
      images: [roofdetachedhouse, roofdetachedhouse2, roofdetachedhouse3, roofdetachedhouse4, roofdetachedhouse5, roofdetachedhouse6]
    },
    {
      title: {
        el: 'Αποπεράτωση δυο ισόγειων παραθεριστικών κατοικιών στον παραθαλάσσιο οικισμό Προφήτη Ηλία Ροδοπης',
        en: 'Completion of two ground-floor holiday homes in Profitis Ilias coastal settlement, Rodopi'
      },
      description: {
        el: 'Μελέτη, επίβλεψη, κατασκευή, Αποπεράτωση δυο ισόγειων παραθεριστικών κατοικιών των 50 τμ. συμβατικής κατασκευής low budget στον παραθαλάσσιο οικισμό Προφήτη Ηλία Ροδοπης.',
        en: 'Study, supervision, construction, Completion of two 50 sq.m. ground-floor holiday homes of conventional low-budget construction in Profitis Ilias coastal settlement, Rodopi.'
      },
      images: [groundFloorHolidayHomes, groundFloorHolidayHomes2, groundFloorHolidayHomes3, groundFloorHolidayHomes4, groundFloorHolidayHomes5, groundFloorHolidayHomes6, groundFloorHolidayHomes7]
    },
    {
      title: {
        el: 'Ανεγερση ισογειας παραθεριστικης μονοκατοικιας στον οικισμο Αρωγης ΠΕ Ροδοπης',
        en: 'Construction of a ground-floor holiday home in Arogi settlement, Rodopi'
      },
      description: {
        el: 'Ανεγερση ισογειας παραθεριστικης μονοκατοικιας 65 τμ, σε οικοπεδο 220 τμ, στον οικισμο Αρωγης ΠΕ Ροδοπης.',
        en: 'Construction of a 65 sq.m. ground-floor holiday home on a 220 sq.m. plot in Arogi settlement, Rodopi.'
      },
      images: [houseAtArogiRodopi, houseAtArogiRodopi2, houseAtArogiRodopi3, houseAtArogiRodopi4, houseAtArogiRodopi5, houseAtArogiRodopi6, houseAtArogiRodopi7, houseAtArogiRodopi8, houseAtArogiRodopi9, houseAtArogiRodopi10]
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: function(i: number) {
      return (
        <button
          type="button"
          className="w-2 h-2 mx-1 bg-white rounded-full opacity-50 hover:opacity-100 transition-opacity"
          aria-label={`Go to slide ${i + 1}`}
        />
      );
    }
  };

  const modalSliderSettings = {
    ...sliderSettings,
    initialSlide: currentImageIndex
  };

  const openImageModal = (images: string[], startIndex: number) => {
    setSelectedImages(images);
    setCurrentImageIndex(startIndex);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    // Ορισμός title και meta description για SEO
    document.title = language === 'el' 
      ? 'Αρχιτεκτονικό Γραφείο | IN-MAVRIDIS - Σχεδιασμός, Μελέτες & Κατασκευές στην Κομοτηνή'
      : 'Architectural Office | IN-MAVRIDIS - Design, Studies & Construction in Komotini';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'el'
        ? 'Ολοκληρωμένες αρχιτεκτονικές υπηρεσίες στην Κομοτηνή. Αρχιτεκτονικός σχεδιασμός, μελέτες, κατασκευές, ανακαινίσεις και εσωτερική διακόσμηση. Εμπειρία 17+ ετών στον κλάδο.'
        : 'Comprehensive architectural services in Komotini, Greece. Architectural design, studies, construction, renovations and interior design. 17+ years of industry experience.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = language === 'el'
        ? 'Ολοκληρωμένες αρχιτεκτονικές υπηρεσίες στην Κομοτηνή. Αρχιτεκτονικός σχεδιασμός, μελέτες, κατασκευές, ανακαινίσεις και εσωτερική διακόσμηση. Εμπειρία 17+ ετών στον κλάδο.'
        : 'Comprehensive architectural services in Komotini, Greece. Architectural design, studies, construction, renovations and interior design. 17+ years of industry experience.';
      document.head.appendChild(meta);
    }
  }, [language]);

  const detailedServices = {
    el: [
      {
        icon: <Ruler className="w-5 h-5" />,
        text: 'Αρχιτεκτονικός σχεδιασμός και αρχιτεκτονική μελέτη - επίβλεψη'
      },
      {
        icon: <Award className="w-5 h-5" />,
        text: 'Πιστοποημένη εκτιμήτρια ακινήτων - REV- Expert Valuer in Property Tegova, αρ μητρώου 552 του Υπ. Οικονομικών.'
      },
      {
        icon: <Building className="w-5 h-5" />,
        text: 'Έκδοση πλήρους φακέλου οικοδομικής άδειας (στατικά, η/μ μέλέτη, ΚΕΝΑΚ, καύσιμο αέριο, πυροπραστασία, φορολογικά, προυπολογισμός έργου κτλ.) και επίβλεψη του έργου.'
      },
      {
        icon: <Building2 className="w-5 h-5" />,
        text: 'Ενεργειακος Επιθεωρητης Α\'ταξης.'
      },
      {
        icon: <CheckCircle2 className="w-5 h-5" />,
        text: 'Έκδοση αδειών λειτουργίας υγειονομικού ενδιαφέροντος παντός τύπου (συνάθροιση κοινού, παρασκευστήρια κτλ.) με πλήρη φάκελο μελετών που απαιτούνται.'
      },
      {
        icon: <Building2 className="w-5 h-5" />,
        text: 'Ρυθμίσεις αυθαιρέτων, βεβαίωση νομιμότητας για μεταβιβάσεις κ.τ.λ.'
      },
      {
        icon: <Building className="w-5 h-5" />,
        text: 'Ενεργειακή επιθεώρηση - ένταξη στο πρόγραμμα "εξοικονομώ κατ\'οίκον" και σύνταξη πλήρους φακέλου.'
      },
      {
        icon: <CheckCircle2 className="w-5 h-5" />,
        text: 'Ελεγκτής δόμησης, ιδιότητα που επιτρέπει στον κύριο του έργου να είναι σε θέση να γνωρίζει τον τρόπο και τη διαδικασία ελέγχου.'
      },
      {
        icon: <Building2 className="w-5 h-5" />,
        text: 'Επιθεωρητης κτιριολογικων στο μητρωο επιθεωρητων του ΕΟΠΠΕΠ για κεντρα φροντιστηρια μεσης εκπαιδευσης, ξενων γλωσσων, κεντρα δια βιου μαθησης επιπεδου Ι και ΙΙ.'
      },
      {
        icon: <Ruler className="w-5 h-5" />,
        text: 'Ανακαινίσεις (σχεδιασμός και κατασκευή έργου) διαμερισμάτων και καταστημάτων, με εξασφάλιση προνομιακών τιμών στη κατασκευή.'
      },
      {
        icon: <Building className="w-5 h-5" />,
        text: 'Διακόσμηση εσωτερικών χώρων, φωτορεαλιστική απεικόνιση, σχεδιασμός επίπλων, φωτορεαλισμός και virtual video.'
      }
    ],
    en: [
      {
        icon: <Ruler className="w-5 h-5" />,
        text: 'Architectural design and architectural study - supervision'
      },
      {
        icon: <Award className="w-5 h-5" />,
        text: 'Certified property valuer - REV- Expert Valuer in Property Tegova, registry number 552 of the Ministry of Finance.'
      },
      {
        icon: <Building className="w-5 h-5" />,
        text: 'Issuance of complete building permit file (structural, E/M study, KENAK, fuel gas, fire protection, tax, project budget etc.) and project supervision.'
      },
      {
        icon: <Building2 className="w-5 h-5" />,
        text: 'Class A Energy Inspector.'
      },
      {
        icon: <CheckCircle2 className="w-5 h-5" />,
        text: 'Issuance of health-related operating licenses of all types (public gathering, preparation areas etc.) with complete study files as required.'
      },
      {
        icon: <Building2 className="w-5 h-5" />,
        text: 'Unauthorized building settlements, legality certificates for transfers etc.'
      },
      {
        icon: <Building className="w-5 h-5" />,
        text: 'Energy inspection - inclusion in the "Energy Saving at Home" program and preparation of complete file.'
      },
      {
        icon: <CheckCircle2 className="w-5 h-5" />,
        text: 'Building inspector, a qualification that allows the project owner to understand the method and process of inspection.'
      },
      {
        icon: <Building2 className="w-5 h-5" />,
        text: 'Building inspector in EOPPEP\'s registry for secondary education tutoring centers, foreign languages, lifelong learning centers level I and II.'
      },
      {
        icon: <Ruler className="w-5 h-5" />,
        text: 'Renovations (design and construction) of apartments and stores, ensuring preferential construction prices.'
      },
      {
        icon: <Building className="w-5 h-5" />,
        text: 'Interior decoration, photorealistic rendering, furniture design, photorealism and virtual video.'
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[400px] bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div 
            className="text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t('architecturalOffice.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              {t('architecturalOffice.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('architecturalOffice.services.title')}
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('architecturalOffice.services.description')}
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services[language].map((service, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  {service.link ? (
                    <Link 
                      to={service.link}
                      className="group inline-flex items-center text-lg font-semibold text-blue-600 hover:text-blue-700"
                    >
                      {service.title}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  )}
                  <p className="text-gray-600 mt-1">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Detailed Services Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {language === 'el' ? 'Αναλυτικές Υπηρεσίες' : 'Detailed Services'}
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {detailedServices[language].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-6 rounded-xl hover:bg-blue-50 transition-all duration-300 border border-gray-100 hover:border-blue-200"
                  >
                    <div className="text-blue-600 p-3 bg-blue-50 rounded-lg">
                      {item.icon}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-10 text-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                {language === 'el' ? 'Επικοινωνήστε μαζί μας' : 'Contact Us'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('architecturalOffice.projects.title')}
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {selectedProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover-card"
                variants={itemVariants}
              >
                <div className="relative h-64">
                  <Slider
                    {...sliderSettings}
                    className="relative"
                    aria-label="Project images slider"
                  >
                    {project.images.map((image, imgIndex) => (
                      <div 
                        key={imgIndex} 
                        className="h-64 cursor-pointer"
                        onClick={() => openImageModal(project.images, imgIndex)}
                      >
                        <img
                          src={image}
                          alt={`${project.title[language]} ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title[language]}</h3>
                  <p className="text-gray-600 mb-2">{project.description[language]}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('architecturalOffice.whyChooseUs.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(t('architecturalOffice.whyChooseUs.reasons') as string[]).map((item: string, index: number) => (
              <motion.div 
                key={index} 
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover-card"
                variants={itemVariants}
              >
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
        >
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 text-white z-50 p-2 hover:text-blue-400 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="w-full max-w-7xl">
              <Slider {...modalSliderSettings}>
                {selectedImages.map((image, index) => (
                  <div key={index} className="outline-none">
                    <div className="flex items-center justify-center h-[80vh]">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ArchitecturalOffice;