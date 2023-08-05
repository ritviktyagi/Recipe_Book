const recipes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    ingredients: ['Spaghetti', 'Eggs', 'Bacon', 'Parmesan cheese', 'Black pepper'],
    instructions: 'Step 1: Cook the spaghetti\nStep 2: Whisk eggs and parmesan cheese together\nStep 3: Fry bacon and mix it with the egg mixture\nStep 4: Combine the egg mixture with cooked spaghetti and toss well\nStep 5: Sprinkle black pepper on top and serve',
    image: 'spaghetti_carbonara.jpg',
    cuisine: 'Italian',
  },
  {
    id: 2,
    name: 'Chicken Curry',
    ingredients: ['Chicken', 'Onion', 'Tomatoes', 'Ginger', 'Garlic', 'Spices'],
    instructions: 'Step 1: Cook onions, ginger, and garlic\nStep 2: Add spices and tomatoes, and cook until oil separates\nStep 3: Add chicken and cook until tender\nStep 4: Serve hot with rice or bread',
    image: 'chicken_curry.jpg',
    cuisine: 'Indian',
  },
  // Add more recipe objects with unique IDs as needed
  {
    id: 3,
    name: 'Grilled Salmon',
    ingredients: ['Salmon fillet', 'Lemon', 'Olive oil', 'Salt', 'Pepper'],
    instructions: 'Step 1: Marinate salmon with lemon juice, olive oil, salt, and pepper\nStep 2: Grill the salmon until cooked\nStep 3: Serve with a side of vegetables',
    image: 'grilled_salmon.jpg',
    cuisine: 'American',
  },
  {
    id: 4,
    name: 'Sushi Rolls',
    ingredients: ['Sushi rice', 'Nori seaweed', 'Fresh fish', 'Cucumber', 'Avocado'],
    instructions: 'Step 1: Prepare sushi rice and lay a sheet of nori on a bamboo mat\nStep 2: Spread rice on the nori and add fish, cucumber, and avocado\nStep 3: Roll the sushi using the bamboo mat\nStep 4: Slice and serve with soy sauce and wasabi',
    image: 'sushi_rolls.jpg',
    cuisine: 'Japanese',
  },
  {
    id: 5,
    name: 'Paneer Tikka Masala',
    ingredients: ['Paneer', 'Onion', 'Tomatoes', 'Yogurt', 'Spices'],
    instructions: 'Step 1: Marinate paneer in yogurt and spices\nStep 2: Grill or cook paneer until golden brown\nStep 3: Cook onions and tomatoes with spices to make the masala\nStep 4: Add paneer to the masala and simmer until flavors blend\nStep 5: Serve with naan or rice',
    image: 'paneer_tikka_masala.jpg',
    cuisine: 'Indian',
  },
  {
    id: 6,
    name: 'Caesar Salad',
    ingredients: ['Romaine lettuce', 'Croutons', 'Parmesan cheese', 'Caesar dressing'],
    instructions: 'Step 1: Wash and chop lettuce\nStep 2: Toss lettuce with croutons and parmesan cheese\nStep 3: Drizzle Caesar dressing and toss well\nStep 4: Serve chilled',
    image: 'caesar_salad.jpg',
    cuisine: 'American',
  },
  {
    id: 7,
    name: 'Mango Lassi',
    ingredients: ['Mango', 'Yogurt', 'Milk', 'Sugar'],
    instructions: 'Step 1: Blend mango, yogurt, milk, and sugar until smooth\nStep 2: Serve chilled in glasses',
    image: 'mango_lassi.jpg',
    cuisine: 'Indian',
  },
  {
    id: 8,
    name: 'Chicken Fajitas',
    ingredients: ['Chicken', 'Bell peppers', 'Onion', 'Fajita seasoning'],
    instructions: 'Step 1: Slice chicken, bell peppers, and onions\nStep 2: Cook chicken until browned and then add vegetables and fajita seasoning\nStep 3: Cook until vegetables are tender\nStep 4: Serve with tortillas and toppings',
    image: 'chicken_fajitas.jpg',
    cuisine: 'Mexican',
  },
  {
    id: 9,
    name: 'Pasta Primavera',
    ingredients: ['Pasta', 'Mixed vegetables', 'Cream sauce'],
    instructions: 'Step 1: Cook pasta until al dente\nStep 2: Sauté mixed vegetables and add cream sauce\nStep 3: Toss pasta with vegetables and sauce\nStep 4: Serve hot',
    image: 'pasta_primavera.jpg',
    cuisine: 'Italian',
  },
  {
    id: 10,
    name: 'Hummus Wrap',
    ingredients: ['Hummus', 'Lettuce', 'Tomatoes', 'Cucumber', 'Tortilla'],
    instructions: 'Step 1: Spread hummus on a tortilla\nStep 2: Add lettuce, tomatoes, and cucumber\nStep 3: Wrap and serve',
    image: 'hummus_wrap.jpg',
    cuisine: 'Mediterranean',
  },
];

export default recipes;