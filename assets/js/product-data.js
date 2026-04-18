// Craving Creams — Product Data
// All products organized by category for dynamic page rendering

const PRODUCT_DATA = {
    // ===================== PREMIUM CATEGORIES =====================
    "premium-cups": {
        title: "125 mL Cups",
        type: "premium",
        typeBadge: "Premium Range",
        typeIcon: "fa-solid fa-crown",
        description: "Indulge in our premium 125mL ice cream cups — perfectly portioned for a personal treat. Available in five irresistible flavors.",
        bannerColor: "linear-gradient(135deg, #683292, #f83d8e)",
        items: [
            {
                id: "vanilla-cup",
                name: "Vanilla",
                image: "assets/images/products/premium/cups/vanilla 125ml zomato.png",
                shortDesc: "Classic vanilla ice cream in a convenient 125mL cup.",
                longDesc: "Our signature vanilla 125mL cup delivers velvety smooth, real vanilla bean ice cream that melts on your tongue. Made with premium milk and natural vanilla extracts, this cup is perfect for an anytime indulgence.",
                highlights: ["Real vanilla bean", "Premium milk", "125mL portion", "No artificial colors"],
                bgColor: "#fffaf4"
            },
            {
                id: "chocolate-cup",
                name: "Chocolate",
                image: "assets/images/products/premium/cups/chocolate 125 ml zomato.png",
                shortDesc: "Rich, indulgent chocolate in a 125mL cup.",
                longDesc: "Dive into the depths of rich, dark chocolate bliss. Our chocolate 125mL cup is crafted with premium cocoa sourced from the finest plantations, delivering an intense chocolate experience in every spoonful.",
                highlights: ["Premium cocoa", "Rich & creamy", "125mL portion", "Intensely chocolatey"],
                bgColor: "#f7f2f7"
            },
            {
                id: "mango-cup",
                name: "Mango",
                image: "assets/images/products/premium/cups/mango 125ml zomato.png",
                shortDesc: "Tropical mango goodness in every spoonful.",
                longDesc: "Experience the taste of summer with our mango 125mL cup. Made with real Alphonso mango pulp, this tropical delight bursts with sweet, fruity flavor that captures the essence of perfectly ripe mangoes.",
                highlights: ["Real Alphonso mango", "Tropical flavor", "125mL portion", "Seasonal favorite"],
                bgColor: "#fff8e1"
            },
            {
                id: "strawberry-cup",
                name: "Strawberry",
                image: "assets/images/products/premium/cups/starwberry 125 ml zomato.png",
                shortDesc: "Luscious strawberry cream in a 125mL cup.",
                longDesc: "Our strawberry 125mL cup is a berry lover's dream — made with real strawberry pieces and natural strawberry flavor. The creamy, fruity base creates a refreshing and indulgent experience.",
                highlights: ["Real strawberry pieces", "Natural flavor", "125mL portion", "Berry fresh"],
                bgColor: "#ffeeee"
            },
            {
                id: "caramel-cup",
                name: "Caramel",
                image: "assets/images/products/premium/cups/caremal 125 ml zomato.png",
                shortDesc: "Buttery caramel swirls in a 125mL cup.",
                longDesc: "Savor the rich, buttery warmth of our caramel 125mL cup. Silky smooth ice cream swirled with ribbons of golden caramel sauce creates a luxurious treat that's impossible to resist.",
                highlights: ["Buttery caramel", "Swirl ribbons", "125mL portion", "Indulgently rich"],
                bgColor: "#fdf0e0"
            }
        ]
    },
    "premium-tubs": {
        title: "500 mL Tubs",
        type: "premium",
        typeBadge: "Premium Range",
        typeIcon: "fa-solid fa-crown",
        description: "Share the joy with our generous 500mL family tubs — premium ice cream in three classic flavors, perfect for family time.",
        bannerColor: "linear-gradient(135deg, #683292, #f83d8e)",
        items: [
            {
                id: "vanilla-tub",
                name: "Vanilla Tub",
                image: "assets/images/products/premium/tubs/vanilla 500 ml cup upscale FINAL.png",
                shortDesc: "Premium vanilla in a generous 500mL family tub.",
                longDesc: "Our bestselling vanilla in a family-sized 500mL tub. Crafted with the finest vanilla beans and farm-fresh cream, this tub is perfect for sharing at family gatherings, parties, or when you just can't get enough.",
                highlights: ["Family-sized 500mL", "Real vanilla beans", "Farm-fresh cream", "Perfect for sharing"],
                bgColor: "#fffaf4"
            },
            {
                id: "chocolate-tub",
                name: "Chocolate Tub",
                image: "assets/images/products/premium/tubs/chocolate Final.png",
                shortDesc: "Decadent chocolate in a 500mL tub to share.",
                longDesc: "Pure chocolate heaven in a generous 500mL tub. Our premium chocolate ice cream is made with Belgian cocoa and fresh dairy, delivering a deep, satisfying chocolate experience for the entire family.",
                highlights: ["Family-sized 500mL", "Belgian cocoa", "Deep chocolate flavor", "Rich & creamy"],
                bgColor: "#f7f2f7"
            },
            {
                id: "strawberry-tub",
                name: "Strawberry Tub",
                image: "assets/images/products/premium/tubs/Strawberry Final.png",
                shortDesc: "Fresh strawberry in a 500mL family tub.",
                longDesc: "Bursting with real strawberry goodness, our 500mL strawberry tub is a fruity masterpiece. Made with hand-picked strawberries and premium cream, it's the perfect family dessert for any occasion.",
                highlights: ["Family-sized 500mL", "Hand-picked strawberries", "Premium cream", "Fruity delight"],
                bgColor: "#ffeeee"
            }
        ]
    },
    "premium-cake-jars": {
        title: "Ice Cream Cake Jars",
        type: "premium",
        typeBadge: "Premium Range",
        typeIcon: "fa-solid fa-crown",
        description: "Layered ice cream cake in a jar — our most indulgent creation. Multiple layers of cake, cream, and toppings in four gourmet flavors.",
        bannerColor: "linear-gradient(135deg, #683292, #f83d8e)",
        items: [
            {
                id: "biscoff-jar",
                name: "Biscoff Cake Jar",
                image: "assets/images/products/premium/cake-jars/Biscoff With logo.png",
                shortDesc: "Irresistible Biscoff layered ice cream cake jar.",
                longDesc: "Layers of creamy Biscoff-infused ice cream, crumbled Lotus Biscoff cookies, and rich caramel sauce come together in this stunning jar. A perfect balance of spiced cookie flavor and smooth ice cream.",
                highlights: ["Lotus Biscoff cookies", "Layered cake & cream", "Caramel sauce", "Gourmet dessert"],
                bgColor: "#fdf0e0"
            },
            {
                id: "chocolate-jar",
                name: "Chocolate Cake Jar",
                image: "assets/images/products/premium/cake-jars/CHOCOLATE with logo.png",
                shortDesc: "Rich chocolate ice cream cake in a jar.",
                longDesc: "A chocolate lover's paradise — layers of moist chocolate cake, dark chocolate ice cream, chocolate ganache, and cocoa crumbles. This jar delivers pure, unadulterated chocolate bliss.",
                highlights: ["Triple chocolate layers", "Dark chocolate ganache", "Moist cake layers", "Cocoa crumbles"],
                bgColor: "#f7f2f7"
            },
            {
                id: "kunafa-jar",
                name: "Kunafa Cake Jar",
                image: "assets/images/products/premium/cake-jars/Kunafa WITH LOGO.png",
                shortDesc: "Exotic kunafa-flavored ice cream cake jar.",
                longDesc: "An exotic fusion of Middle Eastern kunafa with premium ice cream. Crispy shredded phyllo, sweet cheese cream, rose-scented ice cream, and pistachio crumbles create an unforgettable dessert experience.",
                highlights: ["Crispy phyllo layers", "Rose-scented cream", "Pistachio crumbles", "Middle Eastern fusion"],
                bgColor: "#fff8e1"
            },
            {
                id: "red-velvet-jar",
                name: "Red Velvet Cake Jar",
                image: "assets/images/products/premium/cake-jars/Red velvet with logo.png",
                shortDesc: "Velvety red velvet ice cream cake jar.",
                longDesc: "Layers of classic red velvet cake crumbles, rich cream cheese ice cream, and vanilla frosting swirls. This stunning jar combines the beloved red velvet flavor with the cool indulgence of premium ice cream.",
                highlights: ["Red velvet crumbles", "Cream cheese ice cream", "Vanilla frosting", "Stunning layers"],
                bgColor: "#ffeeee"
            }
        ]
    },
    "premium-shakes": {
        title: "Ice Cream Shakes",
        type: "premium",
        typeBadge: "Premium Range",
        typeIcon: "fa-solid fa-crown",
        description: "Thick, creamy ice cream shakes blended to perfection — five premium flavors that redefine the milkshake experience.",
        bannerColor: "linear-gradient(135deg, #683292, #f83d8e)",
        items: [
            {
                id: "biscoff-shake",
                name: "Biscoff Shake",
                image: "assets/images/products/premium/shakes/Biscoff.png",
                shortDesc: "Creamy Biscoff ice cream shake perfection.",
                longDesc: "A thick and luscious shake blended with Biscoff cookie butter ice cream, topped with whipped cream and crushed Biscoff cookies. The spiced caramel flavor creates a truly addictive shake experience.",
                highlights: ["Biscoff cookie butter", "Whipped cream topped", "Crushed cookies", "Spiced caramel"],
                bgColor: "#fdf0e0"
            },
            {
                id: "chocolate-shake",
                name: "Chocolate Shake",
                image: "assets/images/products/premium/shakes/Chocolate ice cream shake with logo.png",
                shortDesc: "Thick and creamy chocolate ice cream shake.",
                longDesc: "Our signature chocolate shake is a decadent blend of premium chocolate ice cream, rich cocoa, and fresh milk — topped with a generous swirl of chocolate whipped cream and cocoa dust.",
                highlights: ["Premium chocolate", "Rich cocoa blend", "Chocolate whipped cream", "Thick & creamy"],
                bgColor: "#f7f2f7"
            },
            {
                id: "oreo-shake",
                name: "Oreo Shake",
                image: "assets/images/products/premium/shakes/Oreoshake.png",
                shortDesc: "Oreo cookie-loaded ice cream shake bliss.",
                longDesc: "Crushed Oreo cookies blended with our creamy vanilla ice cream and fresh milk, creating the ultimate cookies-and-cream shake. Topped with whipped cream and a whole Oreo cookie.",
                highlights: ["Crushed Oreo cookies", "Cookies & cream", "Whole Oreo topping", "Vanilla ice cream base"],
                bgColor: "#f0f0f0"
            },
            {
                id: "red-velvet-shake",
                name: "Red Velvet Shake",
                image: "assets/images/products/premium/shakes/RedVelvet.png",
                shortDesc: "Luxurious red velvet ice cream shake.",
                longDesc: "Indulge in the luxurious blend of red velvet cake crumbles and cream cheese ice cream shake. This stunning deep-red shake is topped with cream cheese frosting and red velvet crumbs.",
                highlights: ["Red velvet cake crumbles", "Cream cheese blend", "Frosting topped", "Stunning presentation"],
                bgColor: "#ffeeee"
            },
            {
                id: "cold-coffee-shake",
                name: "Cold Coffee Shake",
                image: "assets/images/products/premium/shakes/cold COFFEE With Logo.png",
                shortDesc: "Refreshing cold coffee ice cream shake.",
                longDesc: "The perfect pick-me-up — premium Arabica cold brew blended with our vanilla ice cream and a shot of espresso. Topped with coffee-flavored whipped cream and a dusting of cocoa powder.",
                highlights: ["Arabica cold brew", "Espresso shot", "Coffee whipped cream", "Cocoa dust finish"],
                bgColor: "#f5ebe0"
            }
        ]
    },

    // ===================== RETAIL CATEGORIES =====================
    "retail-cones": {
        title: "Cones",
        type: "retail",
        typeBadge: "Retail Range",
        typeIcon: "fa-solid fa-ice-cream",
        description: "Classic ice cream cones in six delicious flavors — the perfect everyday treat wrapped in a crispy wafer cone.",
        bannerColor: "linear-gradient(135deg, #fbab2a, #ff6565)",
        items: [
            {
                id: "vanilla-cone",
                name: "Vanilla Cone",
                image: "assets/images/products/retail/cones/Vanilla.png",
                shortDesc: "Classic vanilla cone for every occasion.",
                longDesc: "The timeless classic — smooth, creamy vanilla ice cream swirled atop a crunchy wafer cone. Simple, satisfying, and always a crowd-pleaser. Our vanilla cone brings joy to every bite.",
                highlights: ["Creamy vanilla", "Crunchy wafer cone", "Classic flavor", "Everyday treat"],
                bgColor: "#fffaf4"
            },
            {
                id: "chocolate-cone",
                name: "Chocolate Cone",
                image: "assets/images/products/retail/cones/chocolate cone.png",
                shortDesc: "Rich chocolate cone with a crispy wafer.",
                longDesc: "Rich chocolate ice cream meets a crispy, golden wafer cone — a match made in dessert heaven. Our chocolate cone delivers deep cocoa flavor with a satisfying crunch in every bite.",
                highlights: ["Rich chocolate", "Golden wafer cone", "Deep cocoa flavor", "Satisfying crunch"],
                bgColor: "#f7f2f7"
            },
            {
                id: "oreo-cone",
                name: "Oreo Cone",
                image: "assets/images/products/retail/cones/oreo cone.png",
                shortDesc: "Oreo-loaded cone with cookie crumbles.",
                longDesc: "Cookies-and-cream lovers, rejoice! Our Oreo cone features creamy vanilla ice cream studded with crushed Oreo cookie pieces, all in a chocolate-dipped wafer cone.",
                highlights: ["Crushed Oreo pieces", "Cookies & cream", "Choco-dipped cone", "Fan favorite"],
                bgColor: "#f0f0f0"
            },
            {
                id: "butterscotch-cone",
                name: "Butterscotch Cone",
                image: "assets/images/products/retail/cones/butterscotch.png",
                shortDesc: "Crunchy butterscotch cone delight.",
                longDesc: "Buttery, caramelized butterscotch ice cream loaded with crunchy toffee bits, served in a crispy wafer cone. The perfect blend of sweet and crunchy that keeps you coming back for more.",
                highlights: ["Butterscotch flavor", "Crunchy toffee bits", "Crispy wafer cone", "Sweet & crunchy"],
                bgColor: "#fff8e1"
            },
            {
                id: "pista-cone",
                name: "Pista Cone",
                image: "assets/images/products/retail/cones/Pista.png",
                shortDesc: "Nutty pistachio cone with real pista.",
                longDesc: "Our pistachio cone is a nutty delight — creamy pista ice cream made with real crushed pistachios, served in a golden wafer cone. A sophisticated flavor for the discerning palate.",
                highlights: ["Real pistachios", "Nutty & creamy", "Sophisticated flavor", "Golden wafer cone"],
                bgColor: "#f6f9e1"
            },
            {
                id: "strawberry-cone",
                name: "Strawberry Cone",
                image: "assets/images/products/retail/cones/strawberry.png",
                shortDesc: "Sweet strawberry cone with fruity flavor.",
                longDesc: "Fruity, refreshing strawberry ice cream in a crispy wafer cone. Made with real strawberry essence, our strawberry cone is light, fruity, and perfect for warm days.",
                highlights: ["Real strawberry essence", "Light & fruity", "Crispy cone", "Refreshing treat"],
                bgColor: "#ffeeee"
            }
        ]
    },
    "retail-kulfies": {
        title: "Kulfies",
        type: "retail",
        typeBadge: "Retail Range",
        typeIcon: "fa-solid fa-ice-cream",
        description: "Traditional Indian kulfies crafted with love — eight authentic flavors made with the richest milk and time-honored recipes.",
        bannerColor: "linear-gradient(135deg, #fbab2a, #ff6565)",
        items: [
            {
                id: "kesar-pista-kulfi",
                name: "Kesar Pista Kulfi",
                image: "assets/images/products/retail/kulfies/KESAR PISTA.png",
                shortDesc: "Traditional kesar pista kulfi, rich & creamy.",
                longDesc: "The crown jewel of Indian frozen desserts — our Kesar Pista kulfi is made with saffron-infused reduced milk, cardamom, and crushed pistachios. A royal treat that captures centuries of tradition.",
                highlights: ["Saffron-infused", "Crushed pistachios", "Reduced milk", "Traditional recipe"],
                bgColor: "#fff8e1"
            },
            {
                id: "mango-kulfi",
                name: "Mango Kulfi",
                image: "assets/images/products/retail/kulfies/MANGO.png",
                shortDesc: "Tropical mango kulfi, a summer favorite.",
                longDesc: "Summer in every bite — our mango kulfi blends the sweetness of ripe Alphonso mangoes with the creaminess of traditional kulfi. A tropical twist on the classic Indian frozen dessert.",
                highlights: ["Alphonso mango", "Summer special", "Tropical twist", "Naturally sweet"],
                bgColor: "#fff3e0"
            },
            {
                id: "rose-kulfi",
                name: "Rose Kulfi",
                image: "assets/images/products/retail/kulfies/ROSE.png",
                shortDesc: "Fragrant rose kulfi with a floral touch.",
                longDesc: "Delicately fragranced with natural rose essence, our rose kulfi is a sophisticated frozen dessert. The floral notes complement the rich, creamy kulfi base, creating an elegant treat.",
                highlights: ["Natural rose essence", "Floral fragrance", "Elegant flavor", "Rich & creamy"],
                bgColor: "#fce4ec"
            },
            {
                id: "paan-kulfi",
                name: "Paan Kulfi",
                image: "assets/images/products/retail/kulfies/PAAN.png",
                shortDesc: "Refreshing paan kulfi, a royal treat.",
                longDesc: "Inspired by the beloved Indian paan, this kulfi combines sweet betel leaf flavor with gulkand and supari. A refreshing, uniquely Indian dessert that's perfect after any meal.",
                highlights: ["Betel leaf flavor", "Gulkand & supari", "After-meal delight", "Uniquely Indian"],
                bgColor: "#e8f5e9"
            },
            {
                id: "chocolate-kulfi",
                name: "Chocolate Kulfi",
                image: "assets/images/products/retail/kulfies/CHOCOLATE.png",
                shortDesc: "Chocolate kulfi with a smooth, creamy finish.",
                longDesc: "A modern twist on the traditional kulfi — rich chocolate blended with creamy kulfi base creates a decadent fusion. The density of kulfi paired with deep chocolate flavor is an irresistible combo.",
                highlights: ["Rich chocolate", "Traditional kulfi base", "Modern fusion", "Dense & creamy"],
                bgColor: "#f7f2f7"
            },
            {
                id: "coconut-kulfi",
                name: "Coconut Kulfi",
                image: "assets/images/products/retail/kulfies/COCONUT.png",
                shortDesc: "Tropical coconut kulfi, naturally sweet.",
                longDesc: "Fresh coconut milk and tender coconut pieces give this kulfi a naturally sweet, tropical character. Light yet creamy, our coconut kulfi is a refreshing take on the classic.",
                highlights: ["Fresh coconut milk", "Tender coconut pieces", "Naturally sweet", "Tropical character"],
                bgColor: "#fffaf4"
            },
            {
                id: "dryfruit-rabdi-kulfi",
                name: "Dryfruit Rabdi Kulfi",
                image: "assets/images/products/retail/kulfies/DRYFRUIT RABDI.png",
                shortDesc: "Loaded with dry fruits and rich rabdi.",
                longDesc: "The ultimate indulgence — our dryfruit rabdi kulfi combines slow-cooked rabdi with a generous mix of almonds, cashews, and pistachios. Every bite is packed with nutty, creamy richness.",
                highlights: ["Slow-cooked rabdi", "Mixed dry fruits", "Almonds & cashews", "Richest kulfi"],
                bgColor: "#fdf0e0"
            },
            {
                id: "mava-kulfi",
                name: "Mava Kulfi",
                image: "assets/images/products/retail/kulfies/MAVA.png",
                shortDesc: "Classic mava kulfi, pure desi indulgence.",
                longDesc: "Made the traditional way with fresh mava (khoya), our mava kulfi is the purest expression of the classic desi frozen dessert. Dense, creamy, and unapologetically rich — just like grandma used to make.",
                highlights: ["Fresh mava/khoya", "Traditional method", "Dense & rich", "Authentic taste"],
                bgColor: "#fffaf4"
            }
        ]
    },
    "retail-chocobars": {
        title: "Chocobars",
        type: "retail",
        typeBadge: "Retail Range",
        typeIcon: "fa-solid fa-ice-cream",
        description: "Crunchy chocolate-coated ice cream bars — the perfect on-the-go frozen treat for chocolate lovers of all ages.",
        bannerColor: "linear-gradient(135deg, #fbab2a, #ff6565)",
        items: [
            {
                id: "choco-carnival",
                name: "Choco Carnival",
                image: "assets/images/products/retail/chocobars/CHOCO Carnival.png",
                shortDesc: "A carnival of chocolate in every bite.",
                longDesc: "Step right up to the Choco Carnival — a festive explosion of chocolate! Rich chocolate ice cream coated in a thick layer of crunchy chocolate shell with colorful chocolate crumbles. It's a celebration on a stick!",
                highlights: ["Crunchy chocolate shell", "Colorful crumbles", "Rich chocolate core", "Fun & festive"],
                bgColor: "#f7f2f7"
            },
            {
                id: "jumbo-chocobar",
                name: "Jumbo Chocobar",
                image: "assets/images/products/retail/chocobars/Jumbo Chocobar.jpg",
                shortDesc: "Extra-large chocobar for maximum indulgence.",
                longDesc: "Go big with our Jumbo Chocobar — an extra-large chocolate ice cream bar coated in a thick, crispy chocolate shell. More chocolate, more cream, more satisfaction in every jumbo-sized bite.",
                highlights: ["Extra-large size", "Thick chocolate shell", "Maximum cream", "Jumbo satisfaction"],
                bgColor: "#fdf0e0"
            },
            {
                id: "nutty-chocobar",
                name: "Nutty Chocobar",
                image: "assets/images/products/retail/chocobars/Nutty Chocobar.png",
                shortDesc: "Chocolate bar loaded with crunchy nuts.",
                longDesc: "The best of both worlds — our Nutty Chocobar combines rich chocolate ice cream with a chocolate coating generously studded with roasted peanuts and almonds. Crunchy, nutty, and irresistible.",
                highlights: ["Roasted peanuts", "Crunchy almonds", "Chocolate coating", "Nutty perfection"],
                bgColor: "#fff8e1"
            }
        ]
    },
    "retail-licks": {
        title: "Licks & Sticks",
        type: "retail",
        typeBadge: "Retail Range",
        typeIcon: "fa-solid fa-ice-cream",
        description: "Colorful, fruity ice candy licks and sticks — the ultimate refreshing treat for kids and the young at heart.",
        bannerColor: "linear-gradient(135deg, #fbab2a, #ff6565)",
        items: [
            {
                id: "blue-safari",
                name: "Blue Safari",
                image: "assets/images/products/retail/licks/Blue safari.png",
                shortDesc: "Cool blue-flavored ice candy lick.",
                longDesc: "Embark on a Blue Safari adventure! This eye-catching blue ice candy lick delivers a cool, refreshing burst of fruity flavor with a vibrant color that kids absolutely love. Fun, refreshing, and irresistible.",
                highlights: ["Cool blue flavor", "Vibrant color", "Kids' favorite", "Refreshing burst"],
                bgColor: "#e3f2fd"
            },
            {
                id: "kaccha-aam",
                name: "Kaccha Aam",
                image: "assets/images/products/retail/licks/kaccha aam.png",
                shortDesc: "Tangy raw mango ice candy lick.",
                longDesc: "The tangy, spicy kick of raw mango captured in a frozen lick. Our Kaccha Aam brings the beloved street-food flavor to ice candy form — sweet, sour, and perfectly refreshing on a hot day.",
                highlights: ["Tangy raw mango", "Sweet & sour", "Street-food inspired", "Summer cooler"],
                bgColor: "#f1f8e9"
            },
            {
                id: "mango-juicy",
                name: "Mango Juicy",
                image: "assets/images/products/retail/licks/mango Juciy.png",
                shortDesc: "Sweet mango ice candy with juicy flavor.",
                longDesc: "Pure mango paradise on a stick! Our Mango Juicy lick is bursting with sweet mango flavor — made with real mango pulp for an authentic taste that's as refreshing as biting into a ripe mango.",
                highlights: ["Real mango pulp", "Sweet & juicy", "Pure mango taste", "Refreshing treat"],
                bgColor: "#fff8e1"
            },
            {
                id: "mango-dute",
                name: "Mango Dute",
                image: "assets/images/products/retail/licks/mango dute.png",
                shortDesc: "Sweet mango-flavored ice candy treat.",
                longDesc: "A delightful mango-flavored ice candy that delivers a smooth, sweet mango experience. Our Mango Dute is lighter and sweeter than traditional mango licks — perfect for those who love gentle mango sweetness.",
                highlights: ["Smooth mango flavor", "Light & sweet", "Gentle sweetness", "Easy to enjoy"],
                bgColor: "#fff3e0"
            },
            {
                id: "orange",
                name: "Orange",
                image: "assets/images/products/retail/licks/orange.jpg",
                shortDesc: "Citrusy orange ice candy refreshment.",
                longDesc: "A burst of citrus sunshine! Our orange ice candy lick delivers the bright, tangy flavor of fresh oranges in a cool, frozen form. Perfect for hot summer days when you need a refreshing citrus kick.",
                highlights: ["Citrus orange flavor", "Bright & tangy", "Summer refresher", "Natural taste"],
                bgColor: "#fff3e0"
            }
        ]
    }
};

// Helper to get category by ID
function getCategoryData(categoryId) {
    return PRODUCT_DATA[categoryId] || null;
}

// Helper to get product by category + product ID
function getProductData(categoryId, productId) {
    const category = PRODUCT_DATA[categoryId];
    if (!category) return null;
    return category.items.find(item => item.id === productId) || null;
}

// Get all categories list
function getAllCategories() {
    return Object.keys(PRODUCT_DATA).map(key => ({
        id: key,
        ...PRODUCT_DATA[key],
        itemCount: PRODUCT_DATA[key].items.length
    }));
}
