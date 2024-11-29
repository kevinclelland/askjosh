"use client";

import { Store, MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  "All Categories",
  "Food & Beverage",
  "Entertainment",
  "Retail & Markets",
  "Hospitality",
  "Education & Services",
  "Health & Wellness",
  "Medical",
  "Personal Services",
  "Transportation",
  "Outdoor Activities",
  "Professional Services",
  "Leisure & Recreation",

];

const businesses = [
  {
      "id": 1,
      "name": "The Fat Butcher",
      "category": "Food & Beverage",
      "rating": 3,
      "address": "1 Van Riebeeck St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Not provided",
      "phone": "(021) 883-3857",
      "description": "Widely praised for its high-quality steaks and cozy ambiance. Visitors love the attentive service and great wine selection.",
      "website": " fatbutcher.co.za"
  },
  {
      "id": 2,
      "name": "Tiger's Milk Stellenbosch",
      "category": "Food & Beverage",
      "rating": 10,
      "address": "98 Dorp St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Not provided",
      "phone": "(021) 569-3707",
      "description": "A lively atmosphere with good food and drinks. Perfect for casual meetups, though it can get busy during peak hours.",
      "website": "tigersmilk.co.za"
  },
  {
      "id": 3,
      "name": "Hudson's The Burger Joint",
      "category": "Food & Beverage",
      "rating": 10,
      "address": "77 Dorp St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Not provided",
      "phone": "(021) 887-2052",
      "description": "Renowned for its gourmet burgers and creative toppings. The shakes are a must-try, though service can be a bit slow at times.",
      "website": "theburgerjoint.co.za"
  },
  {
      "id": 4,
      "name": "Java Bistro",
      "category": "Food & Beverage",
      "rating": 3,
      "address": "8 Jan Katz Building, 31 Church St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Not provided",
      "phone": "(021) 887-6261",
      "description": "A favorite for its relaxed vibe and delicious coffee. Visitors often rave about the breakfast options.",
      "website": "javabistro.net"
  },
  {
      "id": 5,
      "name": "Meraki Caf\u00e9",
      "category": "Food & Beverage",
      "rating": 9,
      "address": "43 Church St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Not provided",
      "phone": "(021) 007-3999",
      "description": "Known for its artisanal pastries and serene environment. Perfect for a quiet brunch or coffee break.",
      "website": "meraki-living.co.za"
  },
  {
      "id": 6,
      "name": "Craft Wheat & Hops Stellenbosch",
      "category": "Food & Beverage",
      "rating": 2,
      "address": "16 Andringa St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Wednesday\t12\u201310\u202fpm\nThursday\t12\u201310\u202fpm\nFriday\t12\u201310\u202fpm\nSaturday\t12\u201310\u202fpm\nSunday\t12\u201310\u202fpm\nMonday\tClosed\nTuesday\t12\u201310\u202fpm",
      "phone": "(069) 407-2547",
      "description": "Highly recommended for craft beer lovers. The food is great for casual bites, with a friendly and welcoming staff.",
      "website": "craftwheatandhops.com"
  },
  {
      "id": 7,
      "name": "Debonairs Stellenbosch",
      "category": "Food & Beverage",
      "rating": 1,
      "address": "Shop 10A, Stellmark Centre, Merriman Ave, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Wednesday\t10\u202fam\u20139\u202fpm\nThursday\t10\u202fam\u20139\u202fpm\nFriday\t10\u202fam\u201310\u202fpm\nSaturday\t10\u202fam\u201310\u202fpm\nSunday\t10\u202fam\u20139\u202fpm\nMonday\t10\u202fam\u20139\u202fpm\nTuesday\t10\u202fam\u20139\u202fpm\n",
      "phone": "(021) 882-8222",
      "description": "Consistently delivers quick and tasty pizzas. Great for takeaway, though seating is limited.",
      "website": "debonairspizza.co.za"
  },
  {
      "id": 8,
      "name": "McDonald's Stellenbosch",
      "category": "Food & Beverage",
      "rating": 6,
      "address": "Shop 34 A & C, Eikestad Shopping Centre, Andringa St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Open 24 hours",
      "phone": "(021) 882-9034",
      "description": "Reliable for fast and familiar meals. Customers appreciate the speed but mention that parking can be challenging.",
      "website": "mcdonalds.co.za"
  },
  {
      "id": 9,
      "name": "Basic Bistro",
      "category": "Food & Beverage",
      "rating": 8,
      "address": "31 Church St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Wednesday\t7:30\u202fam\u20139:30\u202fpm\nThursday\t7:30\u202fam\u20139:30\u202fpm\nFriday\t7:30\u202fam\u20139:30\u202fpm\nSaturday\t9\u202fam\u20139:30\u202fpm\nSunday\t9\u202fam\u20139:30\u202fpm\nMonday\t7:30\u202fam\u20139:30\u202fpm\nTuesday\t7:30\u202fam\u20139:30\u202fpm\n",
      "phone": "(021) 883-3629",
      "description": "Intimate and cozy with a delightful menu. Customers highlight the pasta dishes and desserts as standouts.",
      "website": "basicbistro.co.za"
  },
  {
      "id": 10,
      "name": "Bootlegger Coffee Stellenbosch",
      "category": "Food & Beverage",
      "rating": 8,
      "address": "13 Ryneveld St, Stellenbosch, Cape Town, 7600",
      "hours": "Wednesday\t6:30\u202fam\u20135\u202fpm\nThursday\t6:30\u202fam\u20135\u202fpm\nFriday\t6:30\u202fam\u20135\u202fpm\nSaturday\t7\u202fam\u20133\u202fpm\nSunday\t7\u202fam\u20133\u202fpm\nMonday\t6:30\u202fam\u20135\u202fpm\nTuesday\t6:30\u202fam\u20135\u202fpm\n",
      "phone": "(021) 201-7448",
      "description": "Exceptional coffee with a trendy atmosphere. Guests love the variety of brews and healthy breakfast options.",
      "website": "bootlegger.coffee"
  },
  {
      "id": 11,
      "name": "Balboa Balcony Bar",
      "category": "Entertainment",
      "rating": 8,
      "address": "18A Andringa St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Wednesday\t12\u202fpm\u201312\u202fam\nThursday\t12\u202fpm\u20131:30\u202fam\nFriday\t12\u202fpm\u20131:30\u202fam\nSaturday\t12\u202fpm\u201312\u202fam\nSunday\t12\u202fpm\u201312\u202fam\nMonday\t12\u202fpm\u201312\u202fam\nTuesday\t12\u202fpm\u201312\u202fam\n",
      "phone": "(021) 886-7110",
      "description": "Praised for its unique cocktails and rooftop views. A great spot for evening drinks and socializing.",
      "website": ""
  },
  {
      "id": 12,
      "name": "Dorp Street Market",
      "category": "Retail & Markets",
      "rating": 2,
      "address": "Dorp St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Sunday 9 am-3 pm",
      "phone": "(074) 704-7800",
      "description": "A treasure trove of local produce and crafts. Visitors love the vibrant energy and wide-range of products.",
      "website": ""
  },
  {
      "id": 13,
      "name": "De Warenmarkt",
      "category": "Food & Beverage",
      "rating": 9,
      "address": "20 Ryneveld St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Wednesday\t7\u202fam\u201310\u202fpm\nThursday\t7\u202fam\u201310\u202fpm\nFriday\t7\u202fam\u201310\u202fpm\nSaturday\t7\u202fam\u201310\u202fpm\nSunday\t8\u202fam\u20133\u202fpm\nMonday\t7\u202fam\u201310\u202fpm\nTuesday\t7\u202fam\u201310\u202fpm\n",
      "phone": "(021) 883-2274",
      "description": "Offers a mix of high-quality food and boutique shopping. Known for its gourmet options and cozy seating areas.",
      "website": "dewarenmarkt.com"
  },
  {
      "id": 14,
      "name": "Babylonstoren",
      "category": "Hospitality",
      "rating": 1,
      "address": "Klapmuts - Simondium Rd, Simondium, 7670",
      "hours": "By appointment only",
      "phone": "(021) 863-3852",
      "description": " Visitors rave about the peaceful atmosphere, sustainable farming practices, and the high-quality, locally sourced food. The luxury accommodations and informative tours make it a top choice for those seeking a relaxing, eco-friendly experience in the heart of the winelands. ",
      "website": "babylonstoren.com"
  },
  {
      "id": 15,
      "name": "The Table Restaurant",
      "category": "Food & Beverage",
      "rating": 1,
      "address": "De Meye Farm Muldersvlei Road Klapmuts, Stellenbosch, 7600",
      "hours": "Wednesday\t12\u20135\u202fpm\nThursday\t12\u20135\u202fpm\nFriday\t12\u20135\u202fpm\nSaturday\t12\u20135:30\u202fpm\nSunday\t12\u20135:30\u202fpm\nMonday\tClosed\nTuesday\tClosed",
      "phone": "(072) 696-0530",
      "description": "Famous for its farm-to-table dining experience. Guests appreciate the fresh ingredients and rustic setting.",
      "website": "thetablerestaurant.co.za"
  },
  {
      "id": 16,
      "name": "Drostdy Theatre",
      "category": "Entertainment",
      "rating": 1,
      "address": "Cnr Alexander St &, Bird St, Stellenbosch, 7599",
      "hours": "By appointment only",
      "phone": "(079) 699-5091",
      "description": "Offers an intimate and cultural experience. Visitors enjoy the high-quality performances and cozy atmosphere.",
      "website": "drostdyteater.co.co"
  },
  {
      "id": 17,
      "name": "Stellenbosch Tutors",
      "category": "Education & Services",
      "rating": 4,
      "address": "Simonsberg Manskoshuis, Merriman Ave, Stellenbosch Central, Stellenbosch, 5799",
      "hours": "Wednesday\t9\u202fam\u20135\u202fpm\nThursday\t9\u202fam\u20135\u202fpm\nFriday\t9\u202fam\u20135\u202fpm\nSaturday\t9\u202fam\u20135\u202fpm\nSunday\t9\u202fam\u20135\u202fpm\nMonday\t9\u202fam\u20135\u202fpm\nTuesday\t9\u202fam\u20135\u202fpm\n",
      "phone": "(069) 221-9799",
      "description": "Highly rated for personalized academic support. Parents and students value their professionalism and expertise.",
      "website": "stellenboschtutors.co.za"
  },
  {
      "id": 18,
      "name": "Onyx Educate",
      "category": "Education & Services",
      "rating": 7,
      "address": "",
      "hours": "By appointment only",
      "phone": "",
      "description": "The tutors are professional, knowledgeable, and dedicated to helping students achieve their academic goals. The tailored lessons make learning more effective and enjoyable. ",
      "website": "onyxeducate.com"
  },
  {
      "id": 19,
      "name": "Aspire Fitness Stellenbosch",
      "category": "Health & Wellness",
      "rating": 5,
      "address": "40 Dorp St, Stellenbosch, Cape Town, 7600",
      "hours": "Open 24 hours",
      "phone": "(079) 738-2958",
      "description": "Modern gym facilities with knowledgeable trainers. Members enjoy the friendly environment and variety of classes.",
      "website": "aspirefitness.co.za"
  },
  {
      "id": 20,
      "name": "Virgin Active Stellenbosch",
      "category": "Health & Wellness",
      "rating": 7,
      "address": "Eikestad Mall, 43 Andringa St, Stellenbosch, Cape Town, 7600",
      "hours": "Wednesday\t5\u202fam\u20139\u202fpm\nThursday\t5\u202fam\u20139\u202fpm\nFriday\t5\u202fam\u20138\u202fpm\nSaturday\t6\u202fam\u20138\u202fpm\nSunday\t6\u202fam\u20138\u202fpm\nMonday\t5\u202fam\u20139\u202fpm\nTuesday\t5\u202fam\u20139\u202fpm\n",
      "phone": "(021) 882-8228",
      "description": "Well-equipped gym with a range of equipment and classes. Visitors mention occasional crowding during peak hours.",
      "website": "virginactive.co.za"
  },
  {
      "id": 21,
      "name": "Elite Chiropractic Stellenbosch",
      "category": "Health & Wellness",
      "rating": 9,
      "address": "2nd floor, Opposite Virgin Active, Eikestad Mall, 43 Andringa St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Wednesday\t8\u202fam\u20136\u202fpm\nThursday\t8\u202fam\u20136\u202fpm\nFriday\t8\u202fam\u20136\u202fpm\nSaturday\t9\u202fam\u20135\u202fpm\nSunday\t9\u202fam\u20135\u202fpm\nMonday\t8\u202fam\u20136\u202fpm\nTuesday\t8\u202fam\u20136\u202fpm\n",
      "phone": "(087) 135-5081",
      "description": "Exceptional chiropractic care with a personalized approach. Customers report significant improvements after visits.",
      "website": "elitechiropracticstellenbosch.co.za"
  },
  {
      "id": 22,
      "name": "The Local Choice Pharmacy",
      "category": "Medical",
      "rating": 9,
      "address": " 34 Piet Retief St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Wednesday\t8\u202fam\u20138\u202fpm\nThursday\t8\u202fam\u20138\u202fpm\nFriday\t8\u202fam\u20138\u202fpm\nSaturday\t8:30\u202fam\u20131\u202fpm, 5\u20138\u202fpm\nSunday\t10\u202fam\u201312\u202fpm, 6\u20138\u202fpm\nMonday\t8\u202fam\u20138\u202fpm\nTuesday\t8\u202fam\u20138\u202fpm\n",
      "phone": "(021) 883-3162",
      "description": "Well-stocked with friendly and knowledgeable staff. Often praised for its quick service and convenient location.",
      "website": "thelocalchoice.co.za"
  },
  {
      "id": 23,
      "name": "24 Hour Laundry Stellenbosch",
      "category": "Personal Services",
      "rating": 1,
      "address": "Shop 2, Erf 7311, Stellenbosch, 7600",
      "hours": "Wednesday\t6\u202fam\u201311\u202fpm\nThursday\t6\u202fam\u201311\u202fpm\nFriday\t6\u202fam\u201311\u202fpm\nSaturday\t6\u202fam\u201311\u202fpm\nSunday\t6\u202fam\u201311\u202fpm\nMonday\t6\u202fam\u201311\u202fpm\nTuesday\t6\u202fam\u201311\u202fpm\n",
      "phone": "(072) 796-0443",
      "description": "Affordable and efficient. Customers appreciate the quick turnaround and clean facilities.",
      "website": "24hourlaundry.co.za"
  },
  {
      "id": 24,
      "name": "Mr Tailor",
      "category": "Personal Services",
      "rating": 3,
      "address": "4 Plein St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Wednesday 9\u202fam\u20135:30\u202fpm\nThursday 9\u202fam\u20135:30\u202fpm\nFriday 9\u202fam\u20135:30\u202fpm\nSaturday 9\u202fam\u20133\u202fpm\nSunday 9\u202fam\u20133\u202fpm\nMonday 9\u202fam\u20135:30\u202fpm\nTuesday 9\u202fam\u20135:30\u202fpm",
      "phone": "(062) 159-5499",
      "description": "Highly praised for precise alterations and excellent customer service. Quick turnaround and fair pricing.",
      "website": "mrtailor.co.za"
  },
  {
      "id": 25,
      "name": "Fancy Nails by Janette",
      "category": "Personal Services",
      "rating": 8,
      "address": "28 Church St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Wednesday\t9\u202fam\u20137\u202fpm\nThursday\t9\u202fam\u20137\u202fpm\nFriday\t9\u202fam\u20137\u202fpm\nSaturday\t9\u202fam\u20134\u202fpm\nSunday\tClosed\nMonday\t9\u202fam\u20137\u202fpm\nTuesday\t9\u202fam\u20137\u202fpm\n",
      "phone": "(072) 660-6769",
      "description": "Known for beautiful nail art and friendly service. Customers love the attention to detail and relaxing atmosphere.",
      "website": "fresha.com"
  },
  {
      "id": 26,
      "name": "Winelands Private Transfers",
      "category": "Transportation",
      "rating": 9,
      "address": "Devonbosch, Stellenbosch, 7600",
      "hours": "Open 24 hours",
      "phone": "(063) 278-5944",
      "description": "Reliable and professional shuttle services. Guests value the clean vehicles and punctuality.",
      "website": "privatetransfer.co.za"
  },
  {
      "id": 27,
      "name": "Stellenbosch Shuttles",
      "category": "Transportation",
      "rating": 5,
      "address": "De Velde Estate, De Beers Avenue, Cape Town, 1026 De Velde Estate, Somerset West, Cape Town, 7130",
      "hours": "Open 24 hours",
      "phone": "(084) 730-9467",
      "description": "Convenient for local and airport transfers. Known for courteous drivers and timely arrivals.",
      "website": "stellenboschshuttles.co.za"
  },
  {
      "id": 28,
      "name": "Bikes 'N Wines",
      "category": "Outdoor Activities",
      "rating": 9,
      "address": "",
      "hours": "By appointment only",
      "phone": "(074) 186-0418",
      "description": "A fantastic way to explore Stellenbosch Winelands. Guests rave about the scenic routes and well-maintained bikes.",
      "website": "bikesnwines.com"
  },
  {
      "id": 29,
      "name": "Die Akker Pub & Restaurant",
      "category": "Food & Beverage",
      "rating": 2,
      "address": "90 Dorp St, Stellenbosch, Cape Town, 7600",
      "hours": " Wednesday\t10\u202fam\u20132\u202fam\nThursday\t10\u202fam\u20132\u202fam\nFriday\t10\u202fam\u20132\u202fam\nSaturday\t10\u202fam\u20132\u202fam\nSunday\t10\u202fam\u201312\u202fam\nMonday\t10\u202fam\u20132\u202fam\nTuesday\t10\u202fam\u20132\u202fam\n",
      "phone": "(076) 042-8762",
      "description": "A classic spot for hearty meals and drinks. Loved for its rustic charm and welcoming atmosphere.",
      "website": ""
  },
  {
      "id": 30,
      "name": "SMAC Art Gallery",
      "category": "Entertainment",
      "rating": 10,
      "address": "1st Floor, De Wet Centre, 2 Church Street, Stellenbosch, 7600",
      "hours": "Wednesday\t9\u202fam\u20135\u202fpm\nThursday\t9\u202fam\u20135\u202fpm\nFriday\t9\u202fam\u20135\u202fpm\nSaturday\t10\u202fam\u20133\u202fpm\nSunday\tClosed\nMonday\t9\u202fam\u20135\u202fpm\nTuesday\t9\u202fam\u20135\u202fpm",
      "phone": "(021) 887-3607",
      "description": "A hub for contemporary art lovers. The curated exhibits are praised for their creativity and depth.",
      "website": "smacgallery.com"
  },
  {
      "id": 31,
      "name": "Caf\u00e9 Blom",
      "category": "Food & Beverage",
      "rating": 2,
      "address": "C/O N1 & R304, Hoopenberg Rd, Elsenberg, Stellenbosch, 7646",
      "hours": "Wednesday\t9\u202fam\u20134\u202fpm\nThursday\t9\u202fam\u20134\u202fpm\nFriday\t9\u202fam\u20134\u202fpm\nSaturday\t9\u202fam\u20134\u202fpm\nSunday\t9\u202fam\u20131\u202fpm\nMonday\t9\u202fam\u20134\u202fpm\nTuesday\t9\u202fam\u20135\u202fpm",
      "phone": "(062) 183-0110",
      "description": "Known for its artistic vibe and great coffee. The breakfast options are especially popular among locals.",
      "website": ""
  },
  {
      "id": 32,
      "name": "Oude Werf Hotel Restaurant",
      "category": "Food & Beverage",
      "rating": 10,
      "address": "30 Church St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "By appointment only",
      "phone": "(021) 887-4608",
      "description": "Offers a refined dining experience with excellent service. Guests love the elegant setting and delicious menu.",
      "website": "oudewerf.com"
  },
  {
      "id": 33,
      "name": "Tech Lobby Stellenbosch",
      "category": "Professional Services",
      "rating": 7,
      "address": "5 Merriman Ave, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Wednesday\t9\u202fam\u20136\u202fpm\nThursday\t9\u202fam\u20136\u202fpm\nFriday\t9\u202fam\u20136\u202fpm\nSaturday\t9\u202fam\u20135\u202fpm\nSunday\t9\u202fam\u20132\u202fpm\nMonday\t9\u202fam\u20136\u202fpm\nTuesday\t9\u202fam\u20136\u202fpm",
      "phone": "(074) 202-4235",
      "description": "Highly rated for tech support and product availability. Customers value the knowledgeable staff.",
      "website": ""
  },
  {
      "id": 34,
      "name": "Lanzerac Wine Estate",
      "category": "Hospitality",
      "rating": 5,
      "address": "Lanzerac Wine Estate, Lanzerac Rd, Stellenbosch, 7600",
      "hours": "By appointment only",
      "phone": "(021) 887-1132",
      "description": "World-renowned for its exquisite wines and luxurious setting. Visitors also enjoy the spa and fine dining.",
      "website": "lanzerac.co.za"
  },
  {
      "id": 35,
      "name": "Organic Market Stellenbosch",
      "category": "Retail & Markets",
      "rating": 8,
      "address": "R310 Baden Powell Dr, Stellenbosch, 7603",
      "hours": "Saturday 9 am-2 pm",
      "phone": "(021) 881-3867",
      "description": "A haven for organic produce lovers. Visitors enjoy the variety of fresh and locally sourced items.",
      "website": "spier.co.za"
  },
  {
      "id": 36,
      "name": "Stellenbosch Wine Tours",
      "category": "Outdoor Activities",
      "rating": 10,
      "address": "5 Stellenberg Ave, Welgelegen, Stellenbosch, 7590",
      "hours": "Wednesday 9:30\u202fam\u20135\u202fpm\nThursday 9:30\u202fam\u20135\u202fpm\nFriday 9:30\u202fam\u20135\u202fpm\nSaturday 9:30\u202fam\u20135\u202fpm\nSunday 9:30\u202fam\u20135\u202fpm\nMonday 9:30\u202fam\u20135\u202fpm\nTuesday 9:30\u202fam\u20135\u202fpm",
      "phone": "(083) 301-6774",
      "description": "Highly recommended for exploring the local wine scene. Guides are knowledgeable and engaging.",
      "website": "stellenboschwinetours.net"
  },
  {
      "id": 37,
      "name": "Maties Rock Climbing Wall",
      "category": "Outdoor Activities",
      "rating": 8,
      "address": "4 Suidwal Street, Coetzenburg St, Stellenbosch, 7600",
      "hours": "Open 24 hours",
      "phone": "(060) 554-7619",
      "description": "Perfect for adventure seekers. Visitors praise the well-maintained facilities and experienced instructors.",
      "website": "matiesclimbing.co.za"
  },
  {
      "id": 38,
      "name": "Blommetjie Stalletjie",
      "category": "Retail & Markets",
      "rating": 5,
      "address": "",
      "hours": "Not provided",
      "phone": "",
      "description": "Known for stunning floral arrangements and reliable delivery service. Customers appreciate the creativity.",
      "website": ""
  },
  {
      "id": 39,
      "name": "Biltong & Brew",
      "category": "Food & Beverage",
      "rating": 5,
      "address": "Checkers, 13 Mill St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Wednesday\t8\u202fam\u20136\u202fpm\nThursday\t8\u202fam\u20136\u202fpm\nFriday\t8\u202fam\u20136\u202fpm\nSaturday\t8\u202fam\u20133\u202fpm\nSunday\tClosed\nMonday\t8\u202fam\u20136\u202fpm\nTuesday\t8\u202fam\u20136\u202fpm",
      "phone": "(021) 882-8065",
      "description": "A must-visit for biltong lovers. Guests enjoy the great beer pairings and relaxed atmosphere.",
      "website": ""
  },
  {
      "id": 40,
      "name": "The Hussar Grill",
      "category": "Food & Beverage",
      "rating": 8,
      "address": "Shop G3, Good Hope Building, 23 Plein St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": " Wednesday\t12\u201311\u202fpm\nThursday\t12\u201311\u202fpm\nFriday\t12\u201311\u202fpm\nSaturday\t12\u201311\u202fpm\nSunday\t12\u201311\u202fpm\nMonday\t12\u201311\u202fpm\nTuesday\t12\u201311\u202fpm",
      "phone": "(021) 882-8088",
      "description": "Famous for perfectly cooked steaks and excellent service. Guests appreciate the elegant yet casual vibe.",
      "website": "hussargril.co.za"
  },
  {
      "id": 41,
      "name": "Mediclinic Stellenbosch",
      "category": "Medical",
      "rating": 3,
      "address": " 1 Elsie du Toit Dr, Stellenbosch, 7600",
      "hours": "Open 24 hours",
      "phone": "(086) 133-8777",
      "description": "Highly regarded for its professional staff and state-of-the-art facilities. Patients appreciate the efficient care.",
      "website": "mediclinic.co.za"
  },
  {
      "id": 42,
      "name": "Gino's Stellenbosch",
      "category": "Food & Beverage",
      "rating": 8,
      "address": "De Kelder, 63 Dorp St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Wednesday\t11:30\u202fam\u20139\u202fpm\nThursday\t11:30\u202fam\u20139\u202fpm\nFriday\t11:30\u202fam\u20139\u202fpm\nSaturday\t11:30\u202fam\u20139\u202fpm\nSunday\t11:30\u202fam\u20139\u202fpm\nMonday\tClosed\nTuesday\t11:30\u202fam\u20139\u202fpm",
      "phone": "(021) 887-9786",
      "description": "A cozy Italian spot offering authentic pizzas and pastas. Guests love the generous portions and flavors.",
      "website": "ginos.co.za"
  },
  {
      "id": 43,
      "name": "Postcard Caf\u00e9",
      "category": "Food & Beverage",
      "rating": 1,
      "address": "Stark-Conde Wine Estate Jonkershoek Valley, Stellenbosch, 7600",
      "hours": "Wednesday 8\u202fam\u20134\u202fpm\nThursday\t8\u202fam\u20134\u202fpm\nFriday\t8\u202fam\u20134\u202fpm\nSaturday\t8\u202fam\u20134\u202fpm\nSunday\t8\u202fam\u20134\u202fpm\nMonday\t8\u202fam\u20134\u202fpm\nTuesday\t8\u202fam\u20134\u202fpm",
      "phone": "(021) 861-7703",
      "description": "Praised for its scenic views and delectable menu. Guests enjoy the tranquil setting and friendly service.",
      "website": "stark-conde.co.za"
  },
  {
      "id": 44,
      "name": "Casa Cerveza",
      "category": "Food & Beverage",
      "rating": 2,
      "address": "Corner Dorp &, 54 Dorp Street, Mark St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Wednesday\t8\u202fam\u201311:30\u202fpm\nThursday\t8\u202fam\u201311:30\u202fpm\nFriday\t8\u202fam\u201311:30\u202fpm\nSaturday\t8\u202fam\u201311:30\u202fpm\nSunday\t8\u202fam\u201311\u202fpm\nMonday\t8\u202fam\u201311:30\u202fpm\nTuesday\t8\u202fam\u201311:30\u202fpm\n",
      "phone": "(081) 764-9215",
      "description": "Famous for its lively atmosphere and Mexican-inspired menu. Visitors love the margaritas and tacos.",
      "website": "casacerveza.co.za"
  },
  {
      "id": 45,
      "name": "BuisMed",
      "category": "Medical",
      "rating": 10,
      "address": "Unit 68, Welgevonden, La Belle Vie, Melkbos St, Cloetesville, Stellenbosch, 7600",
      "hours": "Wednesday\t9\u202fam\u20135\u202fpm\nThursday\t9\u202fam\u20135\u202fpm\nFriday\t9\u202fam\u20135\u202fpm\nSaturday\tClosed\nSunday\tClosed\nMonday\t9\u202fam\u20135\u202fpm\nTuesday\t9\u202fam\u20135\u202fpm\n",
      "phone": "(071) 202-3987",
      "description": "A trusted healthcare provider with attentive staff. Patients appreciate the thorough and personalized care.",
      "website": "buismed.co.za"
  },
  {
      "id": 46,
      "name": "SheCab",
      "category": "Transportation",
      "rating": 7,
      "address": "",
      "hours": "By appointment only",
      "phone": "(066) 565-2560",
      "description": "Highly recommended for safe and reliable transport. Guests appreciate the focus on women\u2019s safety.",
      "website": "shecab.co.za"
  },
  {
      "id": 47,
      "name": "Hands On Handymen",
      "category": "Professional Services",
      "rating": 9,
      "address": "",
      "hours": "By appointment only",
      "phone": "(079) 914-0133 | (083) 611 6094",
      "description": "Known for efficient and affordable repairs. Customers praise their attention to detail and professionalism.",
      "website": ""
  },
  {
      "id": 48,
      "name": "Weerdenburg Handyman Services",
      "category": "Professional Services",
      "rating": 3,
      "address": "Lower Middelvlei Farm, Patrys Rd, Onder Papegaaiberg, Stellenbosch, 7600",
      "hours": "Wednesday\t8 am\u20135\u202fpm\nThursday\t8\u202fam\u20135\u202fpm\nFriday\t8\u202fam\u20135\u202fpm\nSaturday\t8\u202fam\u20135\u202fpm\nSunday\t8\u202fam\u20135\u202fpm\nMonday\t8\u202fam\u20135\u202fpm\nTuesday\t8\u202fam\u20135\u202fpm\n\n*Available by call 24 hours\n",
      "phone": "",
      "description": "Reliable for quick fixes and renovations. Clients appreciate the quality and transparency in pricing.",
      "website": "handymanstellenbosch.co.za"
  },
  {
      "id": 49,
      "name": "The Studio Gym",
      "category": "Health & Wellness",
      "rating": 6,
      "address": "1, Unit 1 Inovation Centre, 2 Meson St, Techno Park, Stellenbosch, 7600",
      "hours": "Wednesday\t6\u202fam\u20136\u202fpm\nThursday\t6\u202fam\u20136\u202fpm\nFriday\t6\u202fam\u20132\u202fpm\nSaturday\tClosed\nSunday\tClosed\nMonday\t6\u202fam\u20136\u202fpm\nTuesday\t6\u202fam\u20136\u202fpm",
      "phone": "",
      "description": "A boutique gym offering personalized training. Members love the intimate space and expert instructors.",
      "website": "thestudiogym.co.za"
  },
  {
      "id": 50,
      "name": "Spier Wine Estate",
      "category": "Hospitality",
      "rating": 10,
      "address": "R310 Baden Powell Dr, Stellenbosch, 7603",
      "hours": "Wednesday\t9\u202fam\u20135\u202fpm\nThursday\t9\u202fam\u20135\u202fpm\nFriday\t9\u202fam\u20135\u202fpm\nSaturday\t9\u202fam\u20135\u202fpm\nSunday\t9\u202fam\u20135\u202fpm\nMonday\t9\u202fam\u20135\u202fpm\nTuesday\t9\u202fam\u20135\u202fpm",
      "phone": "(021) 809-1100",
      "description": "Iconic for its exceptional wines and breathtaking setting. Guests also enjoy the farm-to-table dining experience.",
      "website": "spier.co.za"
  },
  {
      "id": 51,
      "name": "Le Hair Lounge",
      "category": "Personal Services",
      "rating": 5,
      "address": "21 Ryneveld St, Stellenbosch Central, Stellenbosch, 7599",
      "hours": "Thursday\t8\u202fam\u20135\u202fpm\nFriday\t8\u202fam\u20135\u202fpm\nSaturday\t8\u202fam\u20131\u202fpm\nSunday\tClosed\nMonday\t8\u202fam\u20135\u202fpm\nTuesday\t8\u202fam\u20135\u202fpm\nWednesday\t8\u202fam\u20135\u202fpm\n",
      "phone": "(021) 883-8323",
      "description": "A luxurious salon with a variety of treatments. Clients praise the relaxing atmosphere and skilled staff.",
      "website": "lehairlounge.com"
  },
  {
      "id": 52,
      "name": "Neelsie Cinema",
      "category": "Entertainment",
      "rating": 9,
      "address": "37 Victoria St, Stellenbosch Central, Stellenbosch, 7602",
      "hours": "Thursday\t8\u202fam\u20139 pm\nFriday\t8\u202fam\u20139\u202fpm\nSaturday\t8\u202fam\u20133\u202fpm\nSunday  8 am-3 pm\nMonday\t8\u202fam\u20139\u202fpm\nTuesday\t8\u202fam\u20139\u202fpm\nWednesday\t8\u202fam\u20139\u202fpm",
      "phone": "(021) 882-9648",
      "description": "37 Victoria St, Stellenbosch Central, Stellenbosch, 7602",
      "website": "cecoevents.co.za"
  },
  {
      "id": 53,
      "name": "Boschendal Wine Estate",
      "category": "Hospitality",
      "rating": 9,
      "address": "Boschendal Estate, Pniel Road, Groot, Franschhoek, 7690",
      "hours": "Thursday\t9\u202fam\u20138\u202fpm\nFriday\t9\u202fam\u20138\u202fpm\nSaturday\t9\u202fam\u20138\u202fpm\nSunday\t9\u202fam\u20138\u202fpm\nMonday\t9\u202fam\u20138\u202fpm\nTuesday\t9\u202fam\u20138\u202fpm\nWednesday\t9\u202fam\u20138\u202fpm",
      "phone": "(021) 870-4200",
      "description": "A must-visit for its historic charm and exquisite wines. Guests also enjoy the farm-to-table meals.",
      "website": "boschendal.com"
  },
  {
      "id": 54,
      "name": "Hartenberg Wines",
      "category": "Hospitality",
      "rating": 3,
      "address": "Bottelary Rd, Koelenhof, Stellenbosch, 7605",
      "hours": "Thursday\t9\u202fam\u20135\u202fpm\nFriday\t9\u202fam\u20135\u202fpm\nSaturday\t9\u202fam\u20134\u202fpm\nSunday\t10\u202fam\u20134\u202fpm\nMonday\t9\u202fam\u20135\u202fpm\nTuesday\t9\u202fam\u20135\u202fpm\nWednesday\t9\u202fam\u20135\u202fpm",
      "phone": "(021) 865-2541",
      "description": "Renowned for its award-winning wines and peaceful setting. Visitors love the guided tastings and picnics.",
      "website": "hartenbergestate.com"
  },
  {
      "id": 55,
      "name": "Delheim Wine Estate",
      "category": "Hospitality",
      "rating": 7,
      "address": "Knorhoek Rd, Stellenbosch, 7599",
      "hours": "Thursday\t9\u202fam\u20135\u202fpm\nFriday\t9\u202fam\u20135\u202fpm\nSaturday\t9\u202fam\u20135\u202fpm\nSunday\t9\u202fam\u20135\u202fpm\nMonday\t9\u202fam\u20135\u202fpm\nTuesday\t9\u202fam\u20135\u202fpm\nWednesday\t9\u202fam\u20135\u202fpm",
      "phone": "(021) 888-4600",
      "description": "Famous for its family-friendly atmosphere and great wines. Guests appreciate the scenic views and bistro.",
      "website": "delheim.com"
  },
  {
      "id": 56,
      "name": "Caltex Car Wash",
      "category": "Personal Services",
      "rating": 6,
      "address": " 248 Bird St, Tetville, Stellenbosch, 7600",
      "hours": "Open 24 hours",
      "phone": "(021) 887-5806",
      "description": "Provides quick and thorough car cleaning. Visitors value the friendly staff and efficient service.",
      "website": ""
  },
  {
      "id": 57,
      "name": "DHL Service Point",
      "category": "Professional Services",
      "rating": 2,
      "address": "63 Bird St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Thursday\t8\u202fam\u20135\u202fpm\nFriday\t8\u202fam\u20135\u202fpm\nSaturday\tClosed\nSunday\tClosed\nMonday\t8\u202fam\u20135\u202fpm\nTuesday\t8\u202fam\u20135\u202fpm\nWednesday\t8\u202fam\u20135\u202fpm",
      "phone": "(021) 872-4717",
      "description": "Known for its efficient mail services. Customers highlight the friendly and helpful staff.",
      "website": "locator.dhl.com"
  },
  {
      "id": 58,
      "name": "Van Schaik Boekwinkel",
      "category": "Personal Services",
      "rating": 4,
      "address": "Student Centre, Langenhoven, 7 De Beer Rd, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Thursday\t8\u202fam\u20135\u202fpm\nFriday\t8\u202f:30 am\u20135\u202fpm\nSaturday\t9 am-1 pm\nSunday\tClosed\nMonday\t8\u202fam\u20135\u202fpm\nTuesday\t8\u202fam\u20135\u202fpm\nWednesday\t8\u202fam\u20135\u202fpm",
      "phone": "(021) 887-2830",
      "description": "",
      "website": "vanschaik.com"
  },
  {
      "id": 59,
      "name": "Franschhoek Wine Tram",
      "category": "Outdoor Activities",
      "rating": 7,
      "address": "Corner of Main Road, Cabriere St, Franschhoek, 7690",
      "hours": "Thursday\t9\u202fam\u20135\u202fpm\nFriday\t9\u202fam\u20135\u202fpm\nSaturday\t9\u202fam\u20135\u202fpm\nSunday\t9\u202fam\u20135\u202fpm\nMonday\t9\u202fam\u20135\u202fpm\nTuesday\t9\u202fam\u20135\u202fpm\nWednesday\t9\u202fam\u20135\u202fpm",
      "phone": "(021) 300-0338",
      "description": "Highly recommended for its immersive wine experiences. Visitors enjoy the friendly guides and scenic routes.",
      "website": "winetram.co.za"
  },
  {
      "id": 60,
      "name": "Flandria Cycles",
      "category": "Retail & Markets",
      "rating": 9,
      "address": "Stelmark Centre, Andringa St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Thursday\t8\u202fam\u20135:30\u202fpm\nFriday\t8\u202fam\u20135:30\u202fpm\nSaturday\t8\u202fam\u20131\u202fpm\nSunday\tClosed\nMonday\t8\u202fam\u20135:30\u202fpm\nTuesday\t8\u202fam\u20135:30\u202fpm\nWednesday\t8\u202fam\u20135:30\u202fpm",
      "phone": "(021) 887-1533",
      "description": "Loved for its quality bikes and excellent repair services. Cyclists praise the knowledgeable staff.",
      "website": "flandria.co.za"
  },
  {
      "id": 61,
      "name": "3@1",
      "category": "Personal Services",
      "rating": 4,
      "address": "Shop No 36, Stellenbosch Square, Jamestown, Stellenbosch, 7613",
      "hours": "Thursday\t9\u202fam\u20136\u202fpm\nFriday\t9\u202fam\u20136\u202fpm\nSaturday\t9\u202fam\u20135\u202fpm\nSunday\t9\u202fam\u20132\u202fpm\nMonday\t9\u202fam\u20136\u202fpm\nTuesday\t9\u202fam\u20136\u202fpm\nWednesday\t9\u202fam\u20136\u202fpm",
      "phone": "(021) 880-2738",
      "description": "",
      "website": "3at1stellenbosch.co.za"
  },
  {
      "id": 62,
      "name": "Kapstadt Brauhaus",
      "category": "Food & Beverage",
      "rating": 5,
      "address": " 98 Dorp St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Thursday\t11\u202fam\u201311\u202fpm\nFriday\t11\u202fam\u201312\u202fam\nSaturday\t11\u202fam\u201312\u202fam\nSunday\t11\u202fam\u201311\u202fpm\nMonday\t11\u202fam\u201311\u202fpm\nTuesday\t11\u202fam\u201311\u202fpm\nWednesday\t11\u202fam\u201311\u202fpm",
      "phone": "(060) 305-9990",
      "description": "Popular for its German-inspired menu and lively ambiance. Guests love the beer selection and hearty meals.",
      "website": "kapstadtbrauhaus.co.za"
  },
  {
      "id": 63,
      "name": "Art & Wine Lounge",
      "category": "Food & Beverage",
      "rating": 10,
      "address": "158 Dorp St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Not provided",
      "phone": "(084) 707-7770",
      "description": "A unique combination of fine wines and local art. Visitors enjoy the creative setting and curated drinks.",
      "website": "artandwine.co.za"
  },
  {
      "id": 64,
      "name": "Noodle Box",
      "category": "Food & Beverage",
      "rating": 7,
      "address": "2 Andringa St, Stellenbosch Central, Stellenbosch, 7599",
      "hours": "Thursday\t11:30\u202fam\u20138:30\u202fpm\nFriday\t11:30\u202fam\u20138:30\u202fpm\nSaturday\t11:30\u202fam\u20138:30\u202fpm\nSunday\t11:30\u202fam\u20138:30\u202fpm\nMonday\t11:30\u202fam\u20138:30\u202fpm\nTuesday\t11:30\u202fam\u20138:30\u202fpm\nWednesday\t11:30\u202fam\u20138:30\u202fpm",
      "phone": "(072) 875-4253",
      "description": "Praised for its flavorful Asian-inspired dishes. Guests appreciate the generous portions and fast service.",
      "website": "noodlebox.co.za"
  },
  {
      "id": 65,
      "name": "Sushi Box",
      "category": "Food & Beverage",
      "rating": 6,
      "address": "3C Andringa St, Stellenbosch Central, Stellenbosch, 7599",
      "hours": "Thursday\t11:30\u202fam\u20138:30\u202fpm\nFriday\t11:30\u202fam\u20138:30\u202fpm\nSaturday\t11:30\u202fam\u20138:30\u202fpm\nSunday\t11:30\u202fam\u20138:30\u202fpm\nMonday\t11:30\u202fam\u20138:30\u202fpm\nTuesday\t11:30\u202fam\u20138:30\u202fpm\nWednesday\t11:30\u202fam\u20138:30\u202fpm",
      "phone": "(063) 676-0410",
      "description": "A hit for fresh and creative sushi rolls. Visitors recommend the signature dishes and cozy setting.",
      "website": "sushibox.co.za"
  },
  {
      "id": 66,
      "name": "RDT Therapy",
      "category": "Health & Wellness",
      "rating": 6,
      "address": "Unit 14B, Oewerpark, Rokewood Rd, Die Boord, Stellenbosch, 7600",
      "hours": "Thursday\t9\u202fam\u20135\u202fpm\nFriday\t9\u202fam\u20135\u202fpm\nSaturday\tClosed\nSunday\tClosed\nMonday\t9\u202fam\u20135\u202fpm\nTuesday\t9\u202fam\u20135\u202fpm\nWednesday\t9\u202fam\u20135\u202fpm\n",
      "phone": "(082) 814-5999",
      "description": "Highly recommended for effective physical therapy. Patients appreciate the caring staff and personalized treatments.",
      "website": "rdt-therapy.co.za"
  },
  {
      "id": 67,
      "name": "Stellenbosch Golf Club",
      "category": "Leisure & Recreation",
      "rating": 10,
      "address": "Strand Rd, Stellenbosch, 7599",
      "hours": "Thursday\t8\u202fam\u20139\u202fpm\nFriday\t8\u202fam\u20139\u202fpm\nSaturday\t8\u202fam\u20139\u202fpm\nSunday\t8\u202fam\u20139\u202fpm\nMonday\t8\u202fam\u20139\u202fpm\nTuesday\t8\u202fam\u20139\u202fpm\nWednesday\t8\u202fam\u20139\u202fpm",
      "phone": "(021) 880-0103",
      "description": "A favorite for golfers and social events. Guests enjoy the well-maintained facilities and scenic views.",
      "website": "stellenboschgolfclub.com"
  },
  {
      "id": 68,
      "name": "Hazendal Golf",
      "category": "Leisure & Recreation",
      "rating": 5,
      "address": "Bottelary Road New entrance from Ronelle Street via, Kruis St, Stellenbosch, 7599",
      "hours": "Thursday\t7:30\u202fam\u20136\u202fpm\nFriday\t7:30\u202fam\u20136\u202fpm\nSaturday\t7:30\u202fam\u20136\u202fpm\nSunday\t7\u202fam\u20135:30\u202fpm\nMonday\t8\u202fam\u20135:30\u202fpm\nTuesday\t7\u202fam\u20136\u202fpm\nWednesday\t7:30\u202fam\u20136\u202fpm",
      "phone": "(021) 206-8537",
      "description": "Known for its top-notch golf course and luxurious amenities. Visitors highlight the family-friendly offerings.",
      "website": "hazendal.co.za"
  },
  {
      "id": 69,
      "name": "De Vleis Paleis",
      "category": "Food & Beverage",
      "rating": 2,
      "address": "56 Dorp St, Stellenbosch Central, Stellenbosch, 7599",
      "hours": "Thursday\t12\u20134\u202fpm, 6\u201310\u202fpm\nFriday\t12\u20134\u202fpm, 6\u201310\u202fpm\nSaturday\t12\u20134\u202fpm, 6\u201310\u202fpm\nSunday\t12\u20134\u202fpm, 6\u201310\u202fpm\nMonday\t12\u20134\u202fpm, 6\u201310\u202fpm\nTuesday\t12\u20134\u202fpm, 6\u201310\u202fpm\nWednesday\t12\u20134\u202fpm, 6\u201310\u202fpm",
      "phone": "(021) 879-2356",
      "description": "Famous for its hearty meat dishes and cozy atmosphere. Guests rave about the generous portions.",
      "website": "devleispaleis.co.za"
  },
  {
      "id": 70,
      "name": "Blix Tavern",
      "category": "Food & Beverage",
      "rating": 1,
      "address": "Dorpstraat, 100, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Thursday\t8\u202fam\u201312\u202fam\nFriday\t8\u202fam\u201312\u202fam\nSaturday\t1\u202fpm\u201312\u202fam\nSunday\tClosed\nMonday\t8\u202fam\u201312\u202fam\nTuesday\t8\u202fam\u201312\u202fam\nWednesday\t8\u202fam\u201312\u202fam\n",
      "phone": "(079) 572-9926",
      "description": "A trendy caf\u00e9 with creative drinks and snacks. Visitors love the relaxed vibe and friendly service.",
      "website": "blix.africa"
  },
  {
      "id": 71,
      "name": "Waterford Estate",
      "category": "Hospitality",
      "rating": 1,
      "address": "Upper Blaauwklippen Rd, Helderberg Rural, Stellenbosch, 7600",
      "hours": "Thursday\t10\u202fam\u20137\u202fpm\nFriday\t10\u202fam\u20137\u202fpm\nSaturday\t10\u202fam\u20137\u202fpm\nSunday\t10\u202fam\u20135\u202fpm\nMonday\t10\u202fam\u20137\u202fpm\nTuesday\t10\u202fam\u20137\u202fpm\nWednesday\t10\u202fam\u20137\u202fpm\n",
      "phone": "(021) 880-5300",
      "description": "Renowned for its elegant wines and picturesque setting. Guests enjoy the wine-and-chocolate pairings.",
      "website": "waterfordestate.co.za"
  },
  {
      "id": 72,
      "name": "Le Pommier",
      "category": "Hospitality",
      "rating": 2,
      "address": "Le Pommier Wine Estate, Helshoogte Rd, Banhoek, Stellenbosch, 7609",
      "hours": "Thursday\t8\u202fam\u201311\u202fpm\nFriday\t8\u202fam\u201311\u202fpm\nSaturday\t8\u202fam\u201311\u202fpm\nSunday\t8\u202fam\u20136\u202fpm\nMonday\t8\u202fam\u201311\u202fpm\nTuesday\t8\u202fam\u201311\u202fpm\nWednesday\t8\u202fam\u201311\u202fpm",
      "phone": "(021) 885-1269",
      "description": "A charming spot for wine and bistro-style dining. Visitors appreciate the welcoming staff and scenic views.",
      "website": "lepommier.co.za"
  },
  {
      "id": 73,
      "name": "Moody Blue",
      "category": "Food & Beverage",
      "rating": 1,
      "address": " Student Centre, Langenhoven, 7 De Beer Rd, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Open 24 hours",
      "phone": "(021) 808-3583",
      "description": "A hidden gem for seafood lovers. Guests praise the fresh ingredients and intimate setting.",
      "website": "nielsiesa.co.za"
  },
  {
      "id": 74,
      "name": "Kristen's Kickass",
      "category": "Food & Beverage",
      "rating": 6,
      "address": "Shop 9B, De Wet Centre, Church St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Thursday\t10\u202fam\u201310\u202fpm\nFriday\t10\u202fam\u201310\u202fpm\nSaturday\t10\u202fam\u201310\u202fpm\nSunday\t10\u202fam\u201310\u202fpm\nMonday\t10\u202fam\u201310\u202fpm\nTuesday\t10\u202fam\u201310\u202fpm\nWednesday\t10\u202fam\u201310\u202fpm",
      "phone": "(069) 560-5785",
      "description": "A must-visit for artisanal ice cream. Customers love the unique flavors and creamy texture.",
      "website": "kristenskickass.co.za"
  },
  {
      "id": 75,
      "name": "Moro Gelato",
      "category": "Food & Beverage",
      "rating": 1,
      "address": "13 Andringa St, Stellenbosch Central, Stellenbosch, 7601",
      "hours": "Thursday\t11 am\u201311pm\nFriday\t11\u202fam\u201311\u202fpm\nSaturday\t11am\u201311\u202fpm\nSunday\t11\u202fam\u201311\u202fpm\nMonday\t12am\u201311 pm\nTuesday\t12\u202fam\u201311 pm\nWednesday\t12\u202fam\u201311 pm",
      "phone": "",
      "description": "Known for authentic Italian gelato. Visitors highlight the rich flavors and quality ingredients.",
      "website": "moregelato.co.za"
  },
  {
      "id": 76,
      "name": "Julian's Caf\u00e9-Bar",
      "category": "Food & Beverage",
      "rating": 10,
      "address": "Eikestad Mall, 43 Andringa St, Eikestad, Stellenbosch, 7600",
      "hours": "Thursday\t9:30\u202fam\u20132\u202fam\nFriday\t9:30\u202fam\u20132\u202fam\nSaturday\t8:30\u202fam\u20132\u202fam\nSunday\t8:30\u202fam\u20132\u202fpm\nMonday\t9:30\u202fam\u20132\u202fam\nTuesday\t9:30\u202fam\u20132\u202fam\nWednesday\t9:30\u202fam\u20132\u202fam\n",
      "phone": "(021) 883-8317",
      "description": "A cozy caf\u00e9 with delightful pastries and coffee. Guests enjoy the friendly service and peaceful ambiance.",
      "website": "julian-s-cafe-bar.webnode.com"
  },
  {
      "id": 77,
      "name": "Van Der Stel Padel",
      "category": "Leisure & Recreation",
      "rating": 8,
      "address": "28 Du Toit St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": " \nThursday\t6\u202fam\u201310\u202fpm\nFriday\t6\u202fam\u201310\u202fpm\nSaturday\t6\u202fam\u201310\u202fpm\nSunday\t6\u202fam\u201310\u202fpm\nMonday\t6\u202fam\u201310\u202fpm\nTuesday\t6\u202fam\u201310\u202fpm\nWednesday\t6\u202fam\u201310\u202fpm\n",
      "phone": "(067) 028-9703",
      "description": "A great place for padel enthusiasts. Visitors appreciate the modern courts and social atmosphere.",
      "website": "africapadel.com"
  },
  {
      "id": 78,
      "name": "Panda",
      "category": "Food & Beverage",
      "rating": 2,
      "address": "12 Hofmeyr St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Thursday\t7\u202fam\u201312\u202fam\nFriday\t7\u202fam\u201312\u202fam\nSaturday\t8\u202fam\u201312\u202fam\nSunday\t8\u202fam\u201312\u202fam\nMonday\t7\u202fam\u201312\u202fam\nTuesday\t7\u202fam\u201312\u202fam\nWednesday\t7\u202fam\u201312\u202fam",
      "phone": "(021) 882-8517",
      "description": "Loved for its Asian-inspired street food. Guests enjoy the bold flavors and vibrant setting.",
      "website": "pandaboxtakeaway.co.za"
  },
  {
      "id": 79,
      "name": "En Route",
      "category": "Food & Beverage",
      "rating": 9,
      "address": "12 Hofmeyr St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Thursday\t7\u202fam\u201312\u202fam\nFriday\t7\u202fam\u201312\u202fam\nSaturday\t8\u202fam\u201312\u202fam\nSunday\t8\u202fam\u201312\u202fam\nMonday\t7\u202fam\u201312\u202fam\nTuesday\t7\u202fam\u201312\u202fam\nWednesday\t7\u202fam\u201312\u202fam\n",
      "phone": "(021) 882-8517",
      "description": "",
      "website": ""
  },
  {
      "id": 80,
      "name": "Tokara Wine Estate",
      "category": "Hospitality",
      "rating": 6,
      "address": "Helshoogte Rd, Stellenbosch, Cape Town, 7600",
      "hours": "Thursday\t10\u202fam\u20135:30\u202fpm\nFriday\t10\u202fam\u20135:30\u202fpm\nSaturday\t10\u202fam\u20135:30\u202fpm\nSunday\t10\u202fam\u20135:30\u202fpm\nMonday\t10\u202fam\u20135:30\u202fpm\nTuesday\t10\u202fam\u20135:30\u202fpm\nWednesday\t10\u202fam\u20135:30\u202fpm",
      "phone": "(021) 808-5900",
      "description": "",
      "website": "tokara.com"
  },
  {
      "id": 81,
      "name": "I-store ",
      "category": "Professional Services",
      "rating": 2,
      "address": "Saville-Winterbottom House, 6 Bird St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Thursday\t8\u202fam\u20136\u202fpm\nFriday\t8\u202fam\u20136\u202fpm\nSaturday\t9\u202fam\u20136\u202fpm\nSunday\t9\u202fam\u20134\u202fpm\nMonday\t8\u202fam\u20136\u202fpm\nTuesday\t8\u202fam\u20136\u202fpm\nWednesday\t8\u202fam\u20136\u202fpm",
      "phone": "(087) 057-5500",
      "description": "",
      "website": "istore.co.za"
  },
  {
      "id": 82,
      "name": "Plato Coffee",
      "category": "Food & Beverage",
      "rating": 9,
      "address": "15 Krige Rd, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Thursday\t6\u202fam\u20136\u202fpm\nFriday\t6\u202fam\u20136\u202fpm\nSaturday\t6\u202fam\u20136\u202fpm\nSunday\t7\u202fam\u20136\u202fpm\nMonday\t6\u202fam\u20136\u202fpm\nTuesday\t6\u202fam\u20136\u202fpm\nWednesday\t6\u202fam\u20136\u202fpm",
      "phone": "(079) 574-0897",
      "description": "",
      "website": "plato.coffee"
  },
  {
      "id": 83,
      "name": "Stellos Coffee",
      "category": "Food & Beverage",
      "rating": 4,
      "address": " 31 Van Riebeeck St, Stellenbosch Central, Stellenbosch, 7600",
      "hours": "Thursday\t7\u202fam\u20136\u202fpm\nFriday\t7\u202fam\u20136\u202fpm\nSaturday\t7\u202fam\u20134\u202fpm\nSunday\t7\u202fam\u20132\u202fpm\nMonday\t7\u202fam\u20136\u202fpm\nTuesday\t7\u202fam\u20136\u202fpm\nWednesday\t7\u202fam\u20136\u202fpm",
      "phone": "",
      "description": "",
      "website": ""
  }
];

interface BusinessDirectoryProps {
  search: string;
}

export function BusinessDirectory({ search }: BusinessDirectoryProps) {
  const filteredBusinesses = businesses.filter(
    (business) =>
      business.name.toLowerCase().includes(search.toLowerCase()) ||
      business.category.toLowerCase().includes(search.toLowerCase()) ||
      business.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          Local Businesses
        </h2>
        <Select defaultValue="All Categories">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredBusinesses.map((business) => (
          <Card key={business.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Store className="h-5 w-5" />
                {business.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  {business.description}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  {business.address}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  {business.hours}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4" />
                  {business.phone}
                </div>
                <a
                  href={business.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  Visit Website
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}