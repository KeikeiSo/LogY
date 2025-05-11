import swedishMassage from "../../assets/services/swedish_massage.png";
import deepTissueMassage from "../../assets/services/deep_tissue_massage.png";
import therapeuticMassage from "../../assets/services/theraputic_massage.png";
import sportMassage from "../../assets/services/sport_massage.png";
import kinesitherapy from "../../assets/services/kinesitherapy.png";
import iastm from "../../assets/services/iastm.png";
import osteopathy from "../../assets/services/osteopathy.png";
import physiotherapy from "../../assets/services/physiotherapy.png";
import kinesiology from "../../assets/services/kinesiology.png";
import personalTraining from "../../assets/services/personal_training.png";
import boxing from "../../assets/services/boxing.png";
import cupping from "../../assets/services/cupping.png";
import acupuncture from "../../assets/services/acupuncture.png";

const ServiceGroups = new Map (
    [
        ["Massage Therapy", "Massothérapie"],
        ["Physical Rehabilitation", "Réadaptation Physique"],
        ["Performance & Fitness", "Performance & Remise en Forme"],
        ["Chinese Medicine Approach", "Approche en Médecine Chinoise"],
    ]
)

const Services = [
    {
        name: "Swedish Massage",
        image: swedishMassage,
        description: "Designed to promote relaxation, reduce stress, and improve circulation by using long, soothing strokes, kneading, and gentle stretches to ease muscle tension.",
        prices: ["60 min 90$", "90 min 135$"],
        benefits: ["relaxation", "stress relief", "light pressure"],
        reserveUrl: "https://forms.gle/AT8h5w7q477KVPTR7",
        nameFr: "Massage Suédois",
        descriptionFr: "Conçu pour favoriser la relaxation, réduire le stress et améliorer la circulation grâce à des effleurages longs et apaisants, des pétrissages et des étirements doux pour soulager les tensions musculaires.",
        benefitsFr: ["relaxation", "anti-stress", "pression légère"],
        group: "Massage Therapy",
    },
    {
        name: "Deep Tissue Massage",
        image: deepTissueMassage,
        description: "Focuses on the deeper layers of muscle and connective tissue to alleviate muscle tension, pain, and stiffness. Using slow, firm pressure and concentrated strokes, deep tissue massage targets high-tension areas such as the neck, shoulders, lower back, and legs.",
        prices: ["60 min 95$", "90 min 142.5$"],
        benefits: ["muscle stiffness", "neck pain", "back pain", "firm pressure", "recovery"],
        reserveUrl: "https://forms.gle/AT8h5w7q477KVPTR7",
        nameFr: "Massage Profond",
        descriptionFr: "Cible les couches profondes des muscles et des tissus conjonctifs pour soulager les tensions, douleurs et raideurs. En utilisant une pression ferme et lente, ce massage vise les zones de forte tension comme le cou, les épaules, le bas du dos et les jambes.",
        benefitsFr: ["raideur musculaire", "douleur cervicale", "mal de dos", "pression ferme", "récupération"],
        group: "Massage Therapy",
    },
    {
        name: "Therapeutic Massage",
        image: therapeuticMassage,
        description: "Personalized approach that addresses specific injuries, pain, or physical conditions. Combining various techniques, aiming to heal the body, reduce muscle tension, alleviate pain, and enhance joint flexibility.",
        prices: ["60 min 95$", "90 min 142.5$"],
        benefits: ["healing", "mobility", "rehab"],
        reserveUrl: "https://forms.gle/AT8h5w7q477KVPTR7",
        nameFr: "Massage Thérapeutique",
        descriptionFr: "Approche personnalisée pour traiter des blessures, douleurs ou conditions physiques spécifiques. Combine diverses techniques pour guérir le corps, réduire les tensions musculaires, soulager la douleur et améliorer la flexibilité articulaire.",
        benefitsFr: ["guérison", "mobilité", "rééducation"],
        group: "Massage Therapy",
    },
    {
        name: "Sports Massage",
        image: sportMassage,
        description: "Designed to help athletes and active individuals by using physical exercises and movement techniques to restore function, reduce pain, and improve mobility. With a focus on strengthening muscles, increasing flexibility, and enhancing joint mobility.",
        prices: ["60 min 95$", "90 min 142.5$"],
        benefits: ["mobility", "athlete injuries", "performance improvement"],
        reserveUrl: "https://forms.gle/AT8h5w7q477KVPTR7",
        nameFr: "Massage Sportif",
        descriptionFr: "Destiné aux athlètes et aux personnes actives, il utilise des exercices et des techniques de mouvement pour restaurer la fonction musculaire, réduire la douleur et améliorer la mobilité. Il renforce les muscles, augmente la flexibilité et optimise la mobilité articulaire.",
        benefitsFr: ["mobilité", "blessures sportives", "amélioration des performances"],
        group: "Massage Therapy",
    },
    {
        name: "Kinesitherapy",
        image: kinesitherapy,
        description: "Focuses on using therapeutic movement and exercises to complement manual techniques such as muscle energy techniques, myofascial release, and PNF stretchings. It reduces both short-term and long-term pain by correcting muscular imbalances and addressing movement restrictions.",
        prices: ["60 min 100$"],
        benefits: ["chronic pain", "acute injuries", "exercise prescription", "rehab"],
        reserveUrl: "https://forms.gle/AT8h5w7q477KVPTR7",
        nameFr: "Kinésithérapie",
        descriptionFr: "Combine des mouvements thérapeutiques et des exercices pour compléter les techniques manuelles (techniques d’énergie musculaire, relâchement myofascial, étirements PNF). Elle réduit les douleurs aiguës et chroniques en corrigeant les déséquilibres musculaires et les restrictions de mouvement.",
        benefitsFr: ["douleur chronique", "blessures aiguës", "prescription d’exercices", "rééducation"],
        group: "Massage Therapy",
        groupFr: "Massothérapie",
    },
    {
        name: "IASTM (Instrument-Assisted Soft Tissue Mobilization)",
        image: iastm,
        description: "Uses specialized tools to apply controlled pressure to soft tissues like muscles, tendons, and fascia, promoting healing and improving mobility. By breaking down scar tissue and adhesions, IASTM helps increase blood flow and range of motion.",
        prices: ["60 min 100$"],
        benefits: ["myofascial release", "mobility", "muscle tension"],
        reserveUrl: "https://forms.gle/AT8h5w7q477KVPTR7",
        nameFr: "IASTM (Mobilisation des tissus mous assistée par instruments)",
        descriptionFr: "Utilise des outils spécialisés pour appliquer une pression contrôlée sur les tissus mous (muscles, tendons, fascias), favorisant la guérison et la mobilité. En éliminant les adhérences et tissus cicatriciels, cette technique améliore la circulation et l’amplitude de mouvement.",
        benefitsFr: ["relâchement myofascial", "mobilité", "tension musculaire"],
        group: "Massage Therapy",
    },
    {
        name: "Osteopathy",
        image: osteopathy,
        description: "A holistic treatment that uses manual manipulation to strengthen the musculoskeletal system and address physical dysfunctions. Osteopaths focus on the interconnectedness of muscles, joints, and bones to improve mobility and relieve pain.",
        prices: ["60 min 100$"],
        benefits: ["joint dysfunction", "malalignment", "muscle pain"],
        reserveUrl: "https://forms.gle/AT8h5w7q477KVPTR7",
        nameFr: "Ostéopathie",
        descriptionFr: "Traitement holistique utilisant des manipulations manuelles pour renforcer le système musculosquelettique et traiter les dysfonctions physiques. Les ostéopathes se concentrent sur l’interconnexion des muscles, articulations et os pour améliorer la mobilité et soulager la douleur.",
        benefitsFr: ["dysfonction articulaire", "mauvais alignement", "douleur musculaire"],
        group: "Physical Rehabilitation",
    },
    {
        name: "Physiotherapy",
        image: physiotherapy,
        description: "Helps individuals restore and maximize their physical function through targeted movement, exercise, manual therapy, and education. Whether you're recovering from injury, managing chronic pain, or improving mobility after surgery, physiotherapy aims to enhance overall physical health, alleviate discomfort, and promote long-term wellness.",
        prices: ["Initial Evaluation: 110$", "Follow-ups: 95$"],
        benefits: ["rehabilitation", "injury", "recovery"],
        reserveUrl: "https://forms.gle/AT8h5w7q477KVPTR7",
        nameFr: "Physiothérapie",
        descriptionFr: "Aide à restaurer et maximiser les fonctions physiques grâce à des mouvements ciblés, des exercices, des thérapies manuelles et de l’éducation. Que ce soit pour une rééducation post-blessure, la gestion de douleurs chroniques ou l’amélioration de la mobilité après une opération, la physiothérapie vise à améliorer la santé physique globale, soulager l’inconfort et promouvoir le bien-être à long terme.",
        benefitsFr: ["réadaptation", "blessure", "récupération"],
        group: "Physical Rehabilitation",
    },
    {
        name: "Kinesiology",
        image: kinesiology,
        description: "Specializes in injury prevention and physical performance enhancement by studying biomechanics and muscle function. Through exercise, stretching, posture correction, and ergonomic adjustments, kinesiology helps improve movement efficiency, posture, and overall physical performance.",
        prices: ["60 min + Exercise program 95$"],
        benefits: ["injury prevention", "posture correction", "functional training"],
        reserveUrl: "https://forms.gle/AT8h5w7q477KVPTR7",
        nameFr: "Kinésiologie",
        descriptionFr: "Spécialisée dans la prévention des blessures et l’amélioration de la performance physique par l’étude de la biomécanique et de la fonction musculaire. Grâce à des exercices, des étirements, des corrections posturales et des ajustements ergonomiques, elle améliore l’efficacité des mouvements, la posture et les performances physiques globales.",
        benefitsFr: ["prévention des blessures", "correction posturale", "entraînement fonctionnel"],
        group: "Performance & Fitness",
    },
    {
        name: "Personal Training",
        image: personalTraining,
        description: "Offers customized workout programs tailored to specific fitness goals—whether it’s weight loss, muscle gain or overall wellness. Designed for all fitness levels, personal trainers will help improve physical strength, endurance, and mobility, while guiding every individual to reach their personal health and fitness milestones.",
        prices: ["60 min 80$"],
        benefits: ["become fit", "wellness", "lose weight", "gain muscle"],
        reserveUrl: "https://forms.gle/AT8h5w7q477KVPTR7",
        nameFr: "Entraînement Personnel",
        descriptionFr: "Programmes d’exercices sur mesure adaptés à des objectifs spécifiques : perte de poids, prise de muscle ou bien-être général. Destiné à tous les niveaux, l’entraîneur personnel aide à améliorer la force, l’endurance et la mobilité tout en guidant vers des objectifs santés personnelles.",
        benefitsFr: ["remise en forme", "bien-être", "perte de poids", "prise de muscle"],
        group: "Performance & Fitness",
    },
    {
        name: "Boxing",
        image: boxing,
        description: "Delivers an intensive full-body workout that combines high-energy cardio and technical training to burn calories, boost fitness, and build strength.",
        prices: ["60 min 80$"],
        benefits: ["cardio", "strength", "weight loss"],
        reserveUrl: "https://forms.gle/AT8h5w7q477KVPTR7",
        nameFr: "Boxe",
        descriptionFr: "Propose un entraînement intensif complet qui allie cardio haute intensité et technique de combat pour brûler des calories, améliorer la condition physique et développer la force. Idéal pour se défouler tout en travaillant l’endurance, la coordination et la puissance musculaire.",
        benefitsFr: ["cardio","force", "perte de poids"],
        group: "Performance & Fitness",
    },
    {
        name: "Cupping Therapy",
        image: cupping,
        description: "Uses suction cups placed on the skin to promote blood flow, release muscle tension, and accelerate healing. This technique helps improve circulation, reduce pain, and ease muscle tightness. Often used in conjunction with massage therapy, cupping is especially beneficial for back pain, chronic muscle soreness, respiratory issues, and stress.",
        prices: ["60 min 95$", "90 min 142.5$"],
        benefits: ["increase circulation", "muscle tension", "back pain", "stress"],
        reserveUrl: "https://forms.gle/AT8h5w7q477KVPTR7",
        nameFr: "Thérapie par ventouses (Cupping)",
        descriptionFr: "Place des ventouses sur la peau pour stimuler la circulation sanguine, relâcher les tensions musculaires et accélérer la guérison. Cette technique améliore la circulation, réduit la douleur et détend les muscles. Souvent combinée au massage, elle est bénéfique pour les maux de dos, douleurs musculaires chroniques, problèmes respiratoires et le stress.",
        benefitsFr: ["amélioration de la circulation", "tension musculaire", "mal de dos", "stress"],
        group: "Chinese Medicine Approach",
    },
    {
        name: "Acupuncture",
        image: acupuncture,
        description: "A traditional Chinese medicine practice that uses fine needles to stimulate specific points on the body, restoring energy flow and balance. It promotes natural healing, alleviates pain, reduces inflammation, and improves overall health.",
        prices: ["60 min 95$"],
        benefits: ["restore energy", "stress", "chronic pain", "anxiety", "insomnia"],
        reserveUrl: "https://forms.gle/AT8h5w7q477KVPTR7",
        nameFr: "Acupuncture",
        descriptionFr: "Pratique de médecine traditionnelle chinoise utilisant de fines aiguilles pour stimuler des points précis du corps, rétablissant le flux énergétique et l’équilibre. Elle favorise la guérison naturelle, soulage la douleur, réduit l’inflammation et améliore la santé globale.",
        benefitsFr: ["rétablir l’énergie", "stress", "douleur chronique", "anxiété", "insomnie "],
        group: "Chinese Medicine Approach",
    },
    // any new service should be added in below format
    /* 
    {
        name: "",
        image: '',
        description: "",
        prices: [""],
        benefits: [""],
        reserveUrl: "",
        nameFr: "",
        descriptionFr: "",
        benefitsFr: [""],
        group: "",
        groupFr: "",
    },
    */
]

export default Services;
export {ServiceGroups};
