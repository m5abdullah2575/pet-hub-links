import { AffiliateLink } from "@/components/AffiliateLink";
import { SocialLinks } from "@/components/SocialLinks";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { useState, useMemo } from "react";
import logo from "@/assets/pet-tools-hub-logo.jpg";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const affiliateLinks = [
    {
     title: "Electric Pet Massager Tool",
     description: "Portable, waterproof electric massager for stress relief and deep tissue kneading for both pets and people.",
     url: "https://s.click.aliexpress.com/e/_c3XCS9qP",
     image: "https://ae01.alicdn.com/kf/S89c724addfe7470f9fa114ada8f16fd50.jpg",
     category: "Grooming",
    },
    {
     title: "Pet Hair Remover Gloves",
     description: "Reusable glove for static pet hair removal from sofa, carpet, and clothes.",
     url: "https://s.click.aliexpress.com/e/_c35vTjC3",
     image: "https://ae01.alicdn.com/kf/Se5bc538a436e46069d5880412dfaf3d2s.png_140x140.png",
     category: "Grooming",
    },

    {
     title: "Pet Ultrasonic Dental Scaler",
     description: "Professional ultrasonic scaler kit for advanced pet dental cleaning and teeth whitening.",
     url: "https://s.click.aliexpress.com/e/_c3TnmWNZ",
     image: "https://ae01.alicdn.com/kf/H5a47acb64dce43cca2d13bc789b06422y.jpg_80x80.jpg",
     category: "Health",
    },

    {
     title: "Anti-Barking Training Collar",
     description: "Automatic, adjustable bark collar that trains small dogs with sound and static correction.",
     url: "https://s.click.aliexpress.com/e/_c4VWiXTZ",
     image: "https://ae01.alicdn.com/kf/S1506f6f1c6424a5580680e89e3d9405ev.jpg_80x80.jpg",
     category: "Training",
    },

    {
     title: "Self-Cleaning Pet Hair Remover Roller",
     description: "Reusable roller with self-cleaning base for instantly clearing pet hair from furniture.",
     url: "https://s.click.aliexpress.com/e/_c2IWxvpV",
     image: "https://ae01.alicdn.com/kf/Sbe550ead713a43b8b627f8ab264b893bD.jpg_80x80.jpg",
     category: "Grooming",
    },
    {
     title: "Pet Food Measuring Scoop",
     description: "Accurately measure and serve pet food with this durable, multipurpose scoop.",
     url: "https://s.click.aliexpress.com/e/_c37LOtmB",
     image: "https://ae01.alicdn.com/kf/S11fe45a5b07e41ff98efd2980c9b6e2eF.jpg_80x80.jpg",
     category: "Feeding",
    },
    {
     title: "Dog Bath & Dry Gloves",
     description: "Ultimate 2-in-1 pet grooming glove: easily bathe and dry your small or medium dog and cat.",
     url: "https://s.click.aliexpress.com/e/_c3fwn3pz",
     image: "https://ae01.alicdn.com/kf/Sf494e653f6924a3d9742d28d86650e2ev.jpg_80x80.jpg",
     category: "Grooming",
    },
    {
     title: "Braided Nylon Dog Leash",
     description: "Heavy-duty braided nylon leash for secure walking and traction control of large dogs.",
     url: "https://s.click.aliexpress.com/e/_c32DkX95",
     image: "https://ae01.alicdn.com/kf/S5bdaf81917574ed6800e66368340ad71f.jpg_80x80.jpg",
     category: "Walking",
    },
    {
     title: "Tactical Bungee Pet Leash",
     description: "Tactical bungee leash: heavy-duty, reflective, shock-absorbing with car seatbelt buckle.",
     url: "https://s.click.aliexpress.com/e/_c3fVu3yb",
     image: "https://ae01.alicdn.com/kf/S14d0aee621a940588de8a68b4c7e61f2a.jpg_80x80.jpg",
     category: "Walking",
    },
    {
     title: "Apple Find My GPS Tracker",
     description: "Waterproof GPS Smart Tag that works seamlessly with the Apple Find My app.",
     url: "https://s.click.aliexpress.com/e/_c4cuDLbD",
     image: "https://ae01.alicdn.com/kf/S9b6bf5adab62478fa77d9dede6fc397ap.jpg_80x80.jpg",
     category: "Tech",
    },
    {
     title: "Remote Dog Training Collar",
     description: "Train your dog safely up to 1000m with rechargeable remote-controlled collar.",
     url: "https://s.click.aliexpress.com/e/_c3bB318b",
     image: "https://ae01.alicdn.com/kf/Se93d0d3b1bf94b11bae03f69933e5a42S.jpg_80x80.jpg",
     category: "Training",
    },
    {
     title: "Durable Tactical Dog Collar and Leash Set",
     description: "Military-grade durability for ultimate training control of medium-to-large dogs.",
     url: "https://s.click.aliexpress.com/e/_c2JqKVV9",
     image: "https://ae01.alicdn.com/kf/S8f5ffc1650604ead9226b37eaa7e8d03f.jpg_80x80.jpg",
     category: "Training",
    },
    {
     title: "Veterinary Endoscope Camera",
     description: "Portable, flexible veterinary endoscope for multi-functional animal diagnosis.",
     url: "https://s.click.aliexpress.com/e/_c45YWpd9",
     image: "https://ae01.alicdn.com/kf/S5bbb419fb22247988f60bd4a26726398j.jpg_80x80.jpg",
     category: "Health",
    },
    {
     title: "Auto Track Pet Camera",
     description: "High-definition pet camera with auto-tracking and cloud storage capabilities.",
     url: "https://s.click.aliexpress.com/e/_c33BBw4n",
     image: "https://ae01.alicdn.com/kf/Sb76f7d7e33f845db90c99dd18ffe4cecO.jpg_80x80.jpg",
     category: "Tech",
    },
    {
     title: "GPS Pet Fitness Tracker",
     description: "Track your pet's location, activity levels, and health metrics in real-time.",
     url: "https://s.click.aliexpress.com/e/_c2uW6TZN",
     image: "https://ae01.alicdn.com/kf/Sb5d431bd99b341609b28e62a27b6c2ddI.jpg_80x80.jpg",
     category: "Tech",
    },
    {
     title: "All-in-One Pet Health Tracker Collar",
     description: "Comprehensive health monitoring collar for complete pet wellness tracking.",
     url: "https://s.click.aliexpress.com/e/_c4LwiqaT",
     image: "https://ae01.alicdn.com/kf/Sb4200f308df04ae7a478ceedf311c8d0C.jpg_80x80.jpg",
     category: "Health",
    },
    {
     title: "Pet Breathing Sensor Alarm",
     description: "Emergency alert system that detects when your pet stops breathing.",
     url: "https://s.click.aliexpress.com/e/_c3tNQQrN",
     image: "https://ae01.alicdn.com/kf/S5cd6ea25e3c549c982e68d5e519a9cfeb.jpg_80x80.jpg",
     category: "Health",
    },
    {
     title: "GPS Tracker with Virtual Fence",
     description: "GPS tracker with health alerts and customizable virtual boundary settings.",
     url: "https://s.click.aliexpress.com/e/_c3PdoDHz",
     image: "https://ae01.alicdn.com/kf/S74e72baf203542c59ba2b871025451ben.jpg_80x80.jpg",
     category: "Tech",
    },
    {
     title: "Mobile Pet Food Storage Container",
     description: "Large capacity mobile food storage container with waterproof seal.",
     url: "https://s.click.aliexpress.com/e/_c4n6SbNd",
     image: "https://ae01.alicdn.com/kf/Sc2a9309d70a147fd800552926297a623x.jpg_80x80.jpg",
     category: "Storage",
    },
    {
     title: "Cat Intubation Tube",
     description: "Professional veterinary tool for safe cat intubation procedures.",
     url: "https://s.click.aliexpress.com/e/_c31lPq1v",
     image: "https://ae01.alicdn.com/kf/S425def98080b4bd68d7992231d9d2ac2K.jpg_80x80.jpg",
     category: "Health",
    },
    {
     title: "Dog Car Booster Seat",
     description: "Premium car seat with storage, scratch protection, and safety features.",
     url: "https://s.click.aliexpress.com/e/_c3wa0pOP",
     image: "https://ae01.alicdn.com/kf/S874e457996ce4aa3a0f6180a642a6bd2q.png_80x80.png",
     category: "Travel",
    },
    {
     title: "Felt Insert Bag Organizer",
     description: "Multi-compartment organizer insert perfect for pet supplies and accessories.",
     url: "https://s.click.aliexpress.com/e/_c3fKesDZ",
     image: "https://ae01.alicdn.com/kf/S0397418c565044ae8effd308df9ce04fn.jpg_80x80.jpg",
     category: "Storage",
    },
    {
     title: "Digital Pet Thermometer",
     description: "Safe, accurate digital thermometer for cats and dogs.",
     url: "https://s.click.aliexpress.com/e/_c4K6zO0r",
     image: "https://ae01.alicdn.com/kf/S98f52074389e41fa9d0ddcd2a380bd2cf.jpg_80x80.jpg",
     category: "Health",
    },
    {
     title: "Pet Treat Storage Boxes",
     description: "Eco-friendly takeout boxes for pet treats and food storage.",
     url: "https://s.click.aliexpress.com/e/_c45JJOyf",
     image: "https://ae01.alicdn.com/kf/Sf24f920e8f7545e0bfd5ad8634ab05c8k.jpg_80x80.jpg",
     category: "Storage",
    },
    {
     title: "Lawn Mower Cutting Heads",
     description: "Durable replacement cutting heads for garden and lawn maintenance.",
     url: "https://s.click.aliexpress.com/e/_c3cYjIvv",
     image: "https://ae01.alicdn.com/kf/S973226568d71499496be550d151a8e96g.jpg_80x80.jpg",
     category: "Garden",
    },
    {
     title: "Automatic Garden Watering System",
     description: "Smart watering system for home gardens and agriculture.",
     url: "https://s.click.aliexpress.com/e/_c3j4YOpp",
     image: "https://ae01.alicdn.com/kf/S520d825aed804beabfd717e0bdc21520m.jpg_80x80.jpg",
     category: "Garden",
    },
    {
     title: "Interactive Cat Teaser Toy",
     description: "Interactive cat toy with treat wheel and spring teaser attachment.",
     url: "https://s.click.aliexpress.com/e/_c45fLKgX",
     image: "https://ae01.alicdn.com/kf/S4dd3b2ec6ec8469f949604782c3b86abB.jpg_80x80.jpg",
     category: "Toys",
    },
    {
     title: "Squeaky Training Ball",
     description: "Durable training ball with squeaky sound for puppies and cats.",
     url: "https://s.click.aliexpress.com/e/_c3r42A11",
     image: "https://ae01.alicdn.com/kf/S6dd007f7d50a4f0b9f29e3b43ad6b438E.jpg_80x80.jpg",
     category: "Toys",
    },
    {
     title: "Auto-Moving Dog Ball",
     description: "Smart automatic ball that moves on its own to engage your pet.",
     url: "https://s.click.aliexpress.com/e/_c3ZEh6Kx",
     image: "https://ae01.alicdn.com/kf/Sd46086b859af482cb4fca70fec414386A.jpg_80x80.jpg",
     category: "Toys",
    },
    {
     title: "Non-Slip Pet Bowl",
     description: "Heavy-duty non-slip feeding bowl for dogs and cats.",
     url: "https://s.click.aliexpress.com/e/_c3C3j5SR",
     image: "https://ae01.alicdn.com/kf/S65883dab07584c8cbbf5586eb6f7b51ev.jpg_80x80.jpg",
     category: "Feeding",
    },
    {
     title: "Airtight Pet Food Container",
     description: "Large airtight sealed container for keeping pet food fresh.",
     url: "https://s.click.aliexpress.com/e/_c4Sh7aYJ",
     image: "https://ae01.alicdn.com/kf/Scf15d4c40c70414fa4c622c18bf8ad531.jpg_80x80.jpg",
     category: "Storage",
    },
    {
     title: "Dental Chew Rubber Ball",
     description: "Indestructible rubber ball for dental health and play.",
     url: "https://s.click.aliexpress.com/e/_c441uikX",
     image: "https://ae01.alicdn.com/kf/Sdd9cbe1472a4449ebfa00f41a4c6e9470.jpg_80x80.jpg",
     category: "Toys",
    },
    {
     title: "Silicone Pet Finger Brush",
     description: "Gentle finger brush set for effective dog and cat dental care.",
     url: "https://s.click.aliexpress.com/e/_c3g2ruQL",
     image: "https://ae01.alicdn.com/kf/Sfbcdb54d883347cf8e6c530afc117c0eC.jpg_80x80.jpg",
     category: "Health",
    },


    {
     title: "Dog Pacer Treadmill",
     description: "Professional pet fitness equipment for indoor training of dogs up to 130lbs.",
     url: "https://s.click.aliexpress.com/e/_c4PBFyLl",
     image: "https://ae01.alicdn.com/kf/Sfb671510850f4297938540a49bbd9f59o.jpg_80x80.jpg",
     category: "Training",
    },


    {
     title: "Disposable Pet Training Pads",
     description: "Wholesale dog and cat pee pads for puppy potty training.",
     url: "https://s.click.aliexpress.com/e/_c3X2GsNv",
     image: "https://ae01.alicdn.com/kf/S36963cbb0c2d4a3c9eaf1fddc4f337cff.jpg_80x80.jpg",
     category: "Training",
    },



    {
     title: "Squeaky Tooth Cleaning Ball",
     description: "TPR training toy with squeaky sound for teeth cleaning and chewing.",
     url: "https://s.click.aliexpress.com/e/_c3cJGOuB",
     image: "https://ae01.alicdn.com/kf/S6dea17a0e1c948b59c61802970ec04567.jpg_80x80.jpg",
     category: "Toys",
    },



    {
     title: "Personalized Dog Training Harness",
     description: "Customizable design harness and collar for medium dogs.",
     url: "https://s.click.aliexpress.com/e/_c4PmmfVN",
     image: "https://ae01.alicdn.com/kf/S55314805087c40d890a15a87982b786fR.jpg_80x80.jpg",
     category: "Training",
    },


    {
     title: "Veterinary Intubation Tube Set",
     description: "17-piece sterilized endotracheal intubation tubes for veterinary use.",
     url: "https://s.click.aliexpress.com/e/_c30cKhld",
     image: "https://ae01.alicdn.com/kf/S730efdf131a44ada9fd8d3048fb3abfb5.jpg_80x80.jpg",
     category: "Health",
    },

    {
     title: "Portable Folding Pet Bowl",
     description: "Collapsible food and water container with custom printing option.",
     url: "https://s.click.aliexpress.com/e/_c3lcIE5h",
     image: "https://ae01.alicdn.com/kf/Sde7295a65c2f48598ad2478d8c7e9a81E.jpg_80x80.jpg",
     category: "Feeding",
    },


     {
     title: "Dual-Sided Hair Removal Gloves",
     description: "Spray upgrade grooming gloves for cleaning and massaging pets.",
     url: "https://s.click.aliexpress.com/e/_c2QTrqzD",
     image: "https://ae01.alicdn.com/kf/Sfab6b1f31de745e59d8900199bdea80aR.jpg_80x80.jpg",
     category: "Grooming",
    },


    {
     title: "4-in-1 Hair Remover Brush",
     description: "Long handle grooming tool with reusable static removal gloves.",
     url: "https://s.click.aliexpress.com/e/_c3FMGXaB",
     image: "https://ae01.alicdn.com/kf/Sf3ddd4ada42b4758b204e9044e0928e1H.jpg_80x80.jpg",
     category: "Grooming",
    },


    {
     title: "Absorbent Bath Gloves",
     description: "Glove-style pet towels for quick drying after bath time.",
     url: "https://s.click.aliexpress.com/e/_c3qZw74L",
     image: "https://ae01.alicdn.com/kf/Sf494e653f6924a3d9742d28d86650e2ev.jpg_80x80.jpg",
     category: "Grooming",
    },


    {
     title: "Cat Protective Grooming Mask",
     description: "Anti-bite breathable space hood for safe bathing and grooming.",
     url: "https://s.click.aliexpress.com/e/_c3cJT83z",
     image: "https://ae01.alicdn.com/kf/S784420f386294e599e882ea48c19fd1ay.jpg_80x80.jpg",
     category: "Grooming",
    },




    {
     title: "Pet Grooming Hammock Bag",
     description: "Restraint bag for nail cutting and bathing with anti-scratch protection.",
     url: "https://s.click.aliexpress.com/e/_c2xCNcZZ",
     image: "https://ae01.alicdn.com/kf/Sc6b1b5e411094ff6873806c0edcf98dbH.jpg_80x80.jpg",
     category: "Grooming",
    },



    {
     title: "Pet Carrier Backpack",
     description: "Mesh sling travel tote with shoulder strap for cats and small dogs.",
     url: "https://s.click.aliexpress.com/e/_c3aNNlkL",
     image: "https://ae01.alicdn.com/kf/S0246a7fc9d154c57a9cfd2b97c8a7ed8g.jpg_80x80.jpg",
     category: "Travel",
    },


    {
     title: "Breathable Pet Carrier Backpack",
     description: "Double shoulder mesh carrier for portable pet travel.",
     url: "https://s.click.aliexpress.com/e/_c3cav2yJ",
     image: "https://ae01.alicdn.com/kf/S9809908c00994046907e25f65a3cd67c7.jpg_80x80.jpg",
     category: "Travel",
    },


    {
     title: "Portable Folding Pet Stroller",
     description: "Lightweight travel dog trolley for easy transportation.",
     url: "https://s.click.aliexpress.com/e/_c30y72vh",
     image: "https://ae01.alicdn.com/kf/S079f05824d7e43aea48c1cfa541916246.jpg_80x80.jpg",
     category: "Travel",
    },




    {
     title: "Breathable Pet Stroller",
     description: "Outdoor lightweight stroller for small to medium pets.",
     url: "https://s.click.aliexpress.com/e/_c4OjIZEf",
     image: "https://ae01.alicdn.com/kf/Sc5ee6563229b4548b31a4212d7a02e96Q.jpg_80x80.jpg",
     category: "Travel",
    },



    {
     title: "Paw Protection Balm",
     description: "50g protective cream for pet paws and nose moisturizing.",
     url: "https://s.click.aliexpress.com/e/_c30ZPsNZ",
     image: "https://ae01.alicdn.com/kf/S0692f52827604ee4ac9d482652b7cf92I.jpg_80x80.jpg",
     category: "Health",
    },





    {
     title: "Reflective No-Pull Dog Harness",
     description: "Adjustable padded chest harness for outdoor walking safety.",
     url: "https://s.click.aliexpress.com/e/_c4ouzhDN",
     image: "https://ae01.alicdn.com/kf/Sec355423572a4f01a2acc15b081cffddX.jpg_80x80.jpg",
     category: "Walking",
    },




    {
     title: "Pet Food Measuring Spoon",
     description: "Durable plastic feeding tool for accurate portion control.",
     url: "https://s.click.aliexpress.com/e/_c3uZfsEb",
     image: "https://ae01.alicdn.com/kf/S11fe45a5b07e41ff98efd2980c9b6e2eF.jpg_80x80.jpg",
     category: "Feeding",
    },



    {
     title: "Double-Sided Grooming Comb",
     description: "Stainless steel brush for removing tangles and loose hair.",
     url: "https://s.click.aliexpress.com/e/_c4Nh7gOF",
     image: "https://ae01.alicdn.com/kf/Sd34b913e01c2442188e022a09706cf2ct.jpg_80x80.jpg",
     category: "Grooming",
    },



    {
     title: "Food-Dispensing Toy Ball",
     description: "Bouncy rubber ball for teeth cleaning and interactive feeding.",
     url: "https://s.click.aliexpress.com/e/_c3W9rtUj",
     image: "https://ae01.alicdn.com/kf/Sdc30c0a9b319407e8b9fb21bc628693aI.jpg_80x80.jpg",
     category: "Toys",
    },






    {
     title: "Strong Reinforced Dog Leash",
     description: "Soft handle leash available in multiple lengths for all dog sizes.",
     url: "https://s.click.aliexpress.com/e/_c3SOZqcP",
     image: "https://ae01.alicdn.com/kf/Sb179a1a59a804f9abb333253b07f9bc2h.jpg_80x80.jpg",
     category: "Walking",
    },




    {
     title: "Interactive Rubber Chew Ball",
     description: "Durable tooth-cleaning ball for play and food dispensing.",
     url: "https://s.click.aliexpress.com/e/_c3SBBFrp",
     image: "https://ae01.alicdn.com/kf/Sdd9cbe1472a4449ebfa00f41a4c6e9470.jpg_80x80.jpg",
     category: "Toys",
    },



    {
     title: "Cat Butt Print Novelty Socks",
     description: "Soft cotton socks with fun cat designs for cat lovers.",
     url: "https://s.click.aliexpress.com/e/_c2QnIWNZ",
     image: "https://ae01.alicdn.com/kf/S537fdce454c14d11a753f3c6a38f4fc7g.jpg_80x80.jpg",
     category: "Accessories",
    },




    {
     title: "Steel Wire Tie Out Cable",
     description: "Anti-rust double-headed cable with metal buckle for outdoor training.",
     url: "https://s.click.aliexpress.com/e/_c3FFrAJV",
     image: "https://ae01.alicdn.com/kf/Sc0c432e5d69141cf8ad030596749f671G.jpg_80x80.jpg",
     category: "Walking",
    },



    {
     title: "Service Dog Vest Harness",
     description: "Reflective Oxford harness with patches and mesh layer for comfort.",
     url: "https://s.click.aliexpress.com/e/_c2yqHuUJ",
     image: "https://ae01.alicdn.com/kf/S0d98c5cf8335463fa83f6164996e73d9o.jpg_80x80.jpg",
     category: "Walking",
    },




    {
     title: "Double Strand Rope Leash Set",
     description: "Colorful 1.2m leash with metal chain buckle and matching collar.",
     url: "https://s.click.aliexpress.com/e/_c3zU80W3",
     image: "https://ae01.alicdn.com/kf/HTB1jcqXQmzqK1RjSZPcq6zTepXaN.jpg_80x80.jpg",
     category: "Walking",
    },







    {
     title: "Tactical Waterproof Dog Vest",
     description: "Reflective 1680D Oxford cloth harness for medium to large dogs.",
     url: "https://s.click.aliexpress.com/e/_c3qHYnyj",
     image: "https://ae01.alicdn.com/kf/S1afb9c76446a4c3faddc0fd2722ff4ddf.jpg_80x80.jpg",
     category: "Walking",
    },


    {
     title: "Adjustable Puppy Harness Set",
     description: "Comfortable vest harness with leash for small dogs and cats.",
     url: "https://s.click.aliexpress.com/e/_c4LPvh2P",
     image: "https://ae01.alicdn.com/kf/S5e9c46c49c4c4a3f9c84e5330e7721c9Z.jpg_80x80.jpg",
     category: "Walking",
    },

    {
     title: "ENT Veterinary Endoscope Camera Multi-function Flexible Urology Endoscopy Cystoscope For Animal Pet Surgical Equipment",
     url: "https://s.click.aliexpress.com/e/_c4riCiN5",
     image: "https:ae01.alicdn.com/kf/S5bbb419fb22247988f60bd4a26726398j.jpg_80x80.jpg",
    },


    {
     title: "Paw Balm for Cats 50g Cat Dog Paw Protective Cream Pet Nose Protector Moisturizer Pet Crack Feet Repair Accessories for Cats",
     url: "https://s.click.aliexpress.com/e/_c3DT435p",
     image: "https://ae01.alicdn.com/kf/S0692f52827604ee4ac9d482652b7cf92I.jpg_80x80.jpg",
    },

    {
     title: "Pet Hair Remover Roller Removing Dog Cat Self Cleaning Lint Pet Hair Remover Pet Hair Remov Cleaning One Hand Operate",
     url: "https://s.click.aliexpress.com/e/_c4d2qh9D",
     image: "https://ae01.alicdn.com/kf/Sbe550ead713a43b8b627f8ab264b893bD.jpg_80x80.jpg",
    },

    {
     title: "Pet Hair Remover Long Handle Pet Hair Remover Brush Dog Cat Hair Cleaner Remover Carpet Bed Hair Cleaning Tools Pet Supplies",
     url: "https://s.click.aliexpress.com/e/_c3povFKj",
     image: "https:/ae01.alicdn.com/kf/Sec8e40a77514412fae10a6894a43c05da.jpg_80x80.jpg",
    },

    {
     title: "Easy Walking Reflective No-Pull Dog Harness With Handle For Training",
     url: "https://s.click.aliexpress.com/e/_c4TaBGZz",
     image: "https://ae01.alicdn.com/kf/S00a5571c39c94d20ae3e50b520eb56baR.jpg_80x80.jpg",
    },

    {
     title: "4pcs Water-Resistant Dog Shoes For Small Dogs - Protect Your Pet's Paws And Keep Them Dry,Outdoor rain boots for dogs",
     url: "https://s.click.aliexpress.com/e/_c3EtkazV",
     image: "https:ae01.alicdn.com/kf/S97f1797e2e43491b8f2c4935b36dee17i.png_80x80.png",
    },

    {
     title: "Soft Silicone Dog Toothbrush 360° Finger Toothbrush for Dogs Cats Durable Pet Finger Brush Tooth Cleaning Tool for All Breeds",
     url: "https://s.click.aliexpress.com/e/_c3PppQ8L",
     image: "https://ae01.alicdn.com/kf/Sd9a227e003af4f7695233c82577ebc19P.jpg_80x80.jpg",
    },

    {
     title: "Pet Grooming Cleaning Gloves Dog Cat Bathing Shampoo Glove Scrubber Magic Dishwashing Cleanner Sponge Silicon Hair Removal Glove",
     url: "https://s.click.aliexpress.com/e/_c4DPRsyT",
     image: "https:////ae01.alicdn.com/kf/Sc07078241a1c447d887ce2be6a0242282.jpg_80x80.jpg",
    },

    {
     title: "Pet Lick Silicone Mat for Dogs Pet Slow Food Plate Dog Bathing Distraction Silicone Dog Sucker Food Training Dog Feeder Supplies",
     url: "https://s.click.aliexpress.com/e/_c4lUb5PV",
     image: "https://ae01.alicdn.com/kf/S92c03f687ad54936945a24e040962e0e9.jpg_80x80.jpg",
    },

    {
     title: "Super Soft Pet Finger Toothbrush Teddy Dog Brush Bad Breath Tartar Teeth Care Tool Dog Cat Cleaning Silicagel Pet Supplies",
     url: "https://s.click.aliexpress.com/e/_c3oAMjSx",
     image: "https://ae01.alicdn.com/kf/S4a54fb37a3c04b1e82ff5c6b8cd866b7R.jpg_80x80.jpg",
    },

    {
     title: "Little yellow duck pet feeding device, cat and dog interactive toy training device, automatic feeder A-DH",
     url: "https://s.click.aliexpress.com/e/_c3h6rNcn",
     image: "https://ae01.alicdn.com/kf/S8f2158cb658e4d539742410e3a4597a1a.jpg_80x80.jpg",
    },

    {
     title: "Pet Can Lid Fresh Silicone Cat and Dog Can Seal Lid Universal Adjustable Seal Lid + Spoon Food Storage Tool",
     url: "https://s.click.aliexpress.com/e/_c3tGNLZh",
     image: "https://ae01.alicdn.com/kf/Sf0f73c2dbc19445bbf0dddf5d172572dp.png_80x80.png",
    },

    {
     title: "New Pet Dog Toy Interactive Rubber Balls for Small Large Dogs Puppy Cat Chewing Toys Pet Tooth Cleaning Indestructible Dog Ball",
     url: "https://s.click.aliexpress.com/e/_c4WVbqnh",
     image: "https://ae01.alicdn.com/kf/Sc5a9ed9793c9494c9961125310ba5f32H.jpg_80x80.jpg",
    },

    {
     title: "Mini Pet Anti-lost Smart GPS Tracker Key Kids Bag Finder Dog Cat Pet for IOS/ Android Locator Bluetooth Tracker Device Reminder",
     url: "https://s.click.aliexpress.com/e/_c4qNA9BN",
     image: "https://sae01.alicdn.com/kf/Sd3295e086fda4420bbeaf74b4137bbc3W.jpg_80x80.jpg",
    },

    {
     title: "Pet Chew Toy TPR Bite-resistance Beer Bottle with Tennis Ball Toy Puppy Teeth Grinding dog Chewing Squeaky Interactive Toys",
     url: "https://s.click.aliexpress.com/e/_c4FuaZVv",
     image: "https://ae01.alicdn.com/kf/S78d40704363142bfb407ccc0e28d6819S.jpg_80x80.jpg",
    },

    {
     title: "Dog Muzzle, Soft Mesh Covered Muzzles Poisoned Bait Protection With Adjustable Straps, Prevent Biting Chewing And Licking",
     url: "https://s.click.aliexpress.com/e/_c3scGP6L",
     image: "https://ae01.alicdn.com/kf/S8cf4f8a8fbd140068edb5321ec7bfdfbI.jpg_80x80.jpg",
    },


  ];

  const categories = ["All", ...Array.from(new Set(affiliateLinks.map(link => link.category)))];

  const filteredLinks = useMemo(() => {
    return affiliateLinks.filter(link => {
      const matchesSearch = link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           link.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || link.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, affiliateLinks]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <img 
              src={logo} 
              alt="Pet Tools Hub" 
              className="w-16 h-16 rounded-lg shadow-sm"
            />
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Pet Tools Hub
              </h1>
              <p className="text-muted-foreground mt-1">
                Quality pet care products for your beloved companions
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 border-border focus:border-primary"
            />
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="border-b border-border bg-card sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer transition-all px-3 py-1.5 text-sm ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {filteredLinks.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredLinks.map((link, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.03}s` }}>
                <AffiliateLink {...link} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">Try a different search or filter</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-12">
        <div className="max-w-5xl mx-auto px-4">
          <SocialLinks />
          <p className="text-center text-sm text-muted-foreground pb-6">
            © {new Date().getFullYear()} Pet Tools Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
