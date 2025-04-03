const Stripe = require('stripe');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: '.env.local' });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
});

const products = [
  {
    name: "Charizard VMAX",
    description: "Charizard VMAX from Darkness Ablaze - PSA 10",
    price: 299.99,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    metadata: {
      cardType: "VMAX",
      condition: "PSA 10",
      set: "Darkness Ablaze"
    }
  },
  {
    name: "Pikachu V",
    description: "Pikachu V Full Art from Vivid Voltage - PSA 9",
    price: 89.99,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    metadata: {
      cardType: "V",
      condition: "PSA 9",
      set: "Vivid Voltage"
    }
  },
  {
    name: "Lugia GX",
    description: "Lugia GX Rainbow Rare from Lost Thunder - PSA 10",
    price: 249.99,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
    metadata: {
      cardType: "GX",
      condition: "PSA 10",
      set: "Lost Thunder"
    }
  },
  {
    name: "Mewtwo EX",
    description: "Mewtwo EX Full Art from Next Destinies - PSA 8",
    price: 179.99,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    metadata: {
      cardType: "EX",
      condition: "PSA 8",
      set: "Next Destinies"
    }
  },
  {
    name: "Rayquaza VMAX",
    description: "Rayquaza VMAX Alternate Art from Evolving Skies - PSA 10",
    price: 399.99,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
    metadata: {
      cardType: "VMAX",
      condition: "PSA 10",
      set: "Evolving Skies"
    }
  }
];

async function seedProducts() {
  try {
    console.log('🌱 Starting to seed products...');

    for (const product of products) {
      // Create the product
      const stripeProduct = await stripe.products.create({
        name: product.name,
        description: product.description,
        images: [product.image],
        metadata: product.metadata,
      });

      console.log(`✅ Created product: ${product.name}`);

      // Create the price for the product
      await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: Math.round(product.price * 100), // Convert to cents
        currency: 'usd',
      });

      console.log(`💰 Created price for ${product.name}: $${product.price}`);
    }

    console.log('✨ Finished seeding products!');
  } catch (error) {
    console.error('Error seeding products:', error);
  }
}

// Run the seeding function
seedProducts(); 