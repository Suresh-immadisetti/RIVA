// products.ts
// Import all product images
import model1 from "../assets/images/products/model1.jpg";
import model1_1 from "../assets/images/products/model1_1.jpg";
import model1_2 from "../assets/images/products/model1_2.jpg";
import model1_3 from "../assets/images/products/model1_3.jpg";
import model1_4 from "../assets/images/products/model1_4.jpg";
import model1_5 from "../assets/images/products/model1_5.jpg";

import model2 from '../assets/images/products/model2.jpg';
import model2_1 from '../assets/images/products/model2_1.jpg';
import model2_2 from '../assets/images/products/model2_2.jpg';
import model2_3 from '../assets/images/products/model2_3.jpg';
import model2_4 from '../assets/images/products/model2_4.jpg';
import model2_5 from '../assets/images/products/model2_5.jpg';

import model3 from '../assets/images/products/model3.jpg';
import model3_1 from '../assets/images/products/model3_1.jpg';
import model3_2 from '../assets/images/products/model3_2.jpg';
import model3_3 from '../assets/images/products/model3_3.jpg';
import model3_4 from '../assets/images/products/model3_4.jpg';
import model3_5 from '../assets/images/products/model3_5.jpg';

import model4 from '../assets/images/products/model4.jpg';
import model4_1 from '../assets/images/products/model4_1.jpg';
import model4_2 from '../assets/images/products/model4_2.jpg';
import model4_3 from '../assets/images/products/model4_3.jpg';
import model4_4 from '../assets/images/products/model4_4.jpg';
import model4_5 from '../assets/images/products/model4_5.jpg';

import robasic from '../assets/images/products/robasic.jpg';
import robasic_1 from '../assets/images/products/robasic_1.jpg';
import robasic_2 from '../assets/images/products/robasic_2.jpg';
import robasic_3 from '../assets/images/products/robasic_3.jpg';
import robasic_4 from '../assets/images/products/robasic_4.jpg';
import robasic_5 from '../assets/images/products/robasic_5.jpg';

import robasicpro from '../assets/images/products/robasicpro.png';
import robasicpro_1 from '../assets/images/products/robasicpro_1.png';
import robasicpro_2 from '../assets/images/products/robasicpro_2.png';
import robasicpro_3 from '../assets/images/products/robasicpro_3.png';
import robasicpro_4 from '../assets/images/products/robasicpro_4.png';
import robasicpro_5 from '../assets/images/products/robasicpro_5.png';

import roledsmart from '../assets/images/products/roledsmart.jpg';
import roledsmart_1 from '../assets/images/products/roledsmart_1.jpg';
import roledsmart_2 from '../assets/images/products/roledsmart_2.jpg';
import roledsmart_3 from '../assets/images/products/roledsmart_3.jpg';
import roledsmart_4 from '../assets/images/products/roledsmart_4.jpg';
import roledsmart_5 from '../assets/images/products/roledsmart_5.jpg';

import rolcdsmart from '../assets/images/products/rolcdsmart.jpg';
import rolcdsmart_1 from '../assets/images/products/rolcdsmart_1.jpg';
import rolcdsmart_2 from '../assets/images/products/rolcdsmart_2.jpg';
import rolcdsmart_3 from '../assets/images/products/rolcdsmart_3.jpg';
import rolcdsmart_4 from '../assets/images/products/rolcdsmart_4.jpg';
import rolcdsmart_5 from '../assets/images/products/rolcdsmart_5.jpg';

import filterCartridge from '../assets/images/products/filter-cartridge.jpg';


import uvSterilizer from '../assets/images/products/uv-sterilizer.jpg';


import rfidcards from '../assets/images/products/rfidcards.jpg';


import tdsMeter from '../assets/images/products/tds-meter.jpg';


export type ProductCategory = "water-atm's" | 'ro-control-panels' | 'accessories';
export type WaterATMSubCategory = 'coin-led' | 'coin-lcd' | 'card-based' | 'upiqr-based';
export type ROControlSubCategory = 'basic' | 'basic-pro' | 'led-display' | 'lcd-display';
export type AccessoriesSubCategory = 'coin-acceptors' | 'solenoid-valves' | 'flow-sensors' | 'rfid-cards';

export interface ProductFeature {
  name: string;
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subCategory?: WaterATMSubCategory | ROControlSubCategory | AccessoriesSubCategory;
  description: string;
  features: ProductFeature[];
  image: string;
  images: string[]; // Array of all product images (6 angles)
  warranty?: string;
  specifications?: Record<string, string>;
}

export const products: Product[] = [
  // Water ATMs
  {
    id: 'water-atm-coin-led',
    name: 'Coin Based Water ATM with LED Display',
    category: "water-atm's",
    subCategory: 'coin-led',
    description: 'Reliable coin-operated water dispensing solution with LED display for public spaces and communities.',
    features: [
      { name: 'Microcontrol & SMPS Based' },
      { name: 'Multi-Coin Acceptance' },
      { name: 'LED Display (4x1)' },
      { name: 'Auto & Manual Mode Operations' },
      { name: 'You Can Set 3 types of Water.' },
      { name: 'Manual Water Setup.' },
      { name: 'Time Based & Flow Based Workings.' },
      { name: 'Emergency Stop Button Available.' },
      { name: 'Back Single Door System.' } 
    ],
    image: model1,
    images: [model1, model1_1, model1_2, model1_3, model1_4, model1_5],
    warranty: '1 year',
    specifications: {
      'Dimensions': '400x300x150 mm',
      'Weight': '5.5 kg',
      'Power Supply': '110-240V AC',
      'Water Output': 'Up to 50 liters per minute'
    }
  },
  {
    id: 'water-atm-coin-lcd',
    name: 'Coin Based Water ATM with LCD Display',
    category: "water-atm's",
    subCategory: 'coin-lcd',
    description: 'Advanced coin-operated water ATM with LCD display for better user interface.',
    features: [
      { name: 'Microcontrol & SMPS Based' },
      { name: 'Multi-Coin Acceptance' },
      { name: 'LCD Display (16x2)' },
      { name: 'Auto & Manual Mode Operations.' },
      { name: 'You Can Set 3 types of Water.' },
      { name: 'Easy Auto Water Setup.' },
      { name: 'Time Based & Flow Based Workings.' },
      { name: 'Emergency Stop Button Available.' },
      { name: 'Back Double Door System.' }
    ],
    image: model2,
    images: [model2, model2_1, model2_2, model2_3, model2_4, model2_5],
    warranty: '1 year',
    specifications: {
      'Dimensions': '400x300x150 mm',
      'Weight': '5.5 kg',
      'Power Supply': '110-240V AC',
      'Water Output': 'Up to 50 liters per minute'
    }
  },
  {
    id: 'water-atm-card',
    name: 'Coin + Card Swipe Water ATM',
    category: "water-atm's",
    subCategory: 'card-based',
    description: 'Advanced water ATM with card swipe functionality and LCD display for commercial complexes.',
    features: [
      { name: 'Microcontrol & SMPS Based' },
      { name: 'Multi Coins Accepted.' },
      { name: 'LCD Display (16x2)' },
      { name: 'Card Vending & Card Recharge Facility.' },
      { name: 'Auto & Manual Mode Operations.' },
      { name: 'You Can Set 3 types of Water.' },
      { name: 'Easy Auto Water Setup' },
      { name: 'Time Based & Flow Based Workings.' },
      { name: 'Emergency Stop Button Available.' },
      { name: 'Back Double Door System.' } 
    ],
    image: model3,
    images: [model3, model3_1, model3_2, model3_3, model3_4, model3_5],
    warranty: '1.5 years',
    specifications: {
      'Dimensions': '450x350x180 mm',
      'Weight': '6.8 kg',
      'Power Supply': '110-240V AC',
      'Water Output': 'Up to 60 liters per minute'
    }
  },
  {
    id: 'water-atm-upiqr',
    name: 'Coin + Card + UPI QR Water ATM',
    category: "water-atm's",
    subCategory: 'upiqr-based',
    description: 'Premium digital payment enabled water ATM with UPI QR scanning for modern smart cities.',
    features: [
      { name: 'Microcontrol & SMPS Based' },
      { name: 'Multi Coins Accepted.' },
      { name: 'LCD Display (16x2)' },
      { name: 'UPI QR Payments & Vendings.' },
      { name: 'Card Vending & Card Recharge Facility.' },
      { name: 'Auto & Manual Mode Operations.' },
      { name: 'You Can Set 3 types of Water.' },
      { name: 'Easy Auto Water Setup' },
      { name: 'Time Based & Flow Based Workings.' },
      { name: 'Emergency Stop Button Available.' },
      { name: 'Back Double Door System.' }
    ],
    image: model4,
    images: [model4, model4_1, model4_2, model4_3, model4_4, model4_5],
    warranty: '2 years',
    specifications: {
      'Dimensions': '500x400x200 mm',
      'Weight': '8.5 kg',
      'Power Supply': '110-240V AC',
      'Water Output': 'Up to 80 liters per minute'
    }
  },

  // RO Control Panels
  {
    id: 'ro-panel-basic',
    name: 'Basic RO Control',
    category: 'ro-control-panels',
    subCategory: 'basic',
    description: 'Essential RO control with basic functionality for small-scale water purification systems.',
    features: [
      { name: 'Range: 250 LPH to 1000 LPH.' },
      { name: 'No Display LED Indications.' },
      { name: 'Manual Operation Only (Semi Automatic).' },
      { name: 'Raw Water Tank Floaty Provision.' },
      { name: 'Treated Water Tank Floaty Provision.' },
      { name: 'HPS Switch Provision.' },
      { name: 'LPS Switch Provision.' }
    ],
    image: robasic,
    images: [robasic, robasic_1, robasic_2, robasic_3, robasic_4, robasic_5],
    warranty: '1 year',
    specifications: {
      'Operating Voltage': '230V AC',
      'Current Rating': '10A',
      'Protection': 'Basic overload',
      'Enclosure Rating': 'IP54'
    }
  },
  {
    id: 'ro-panel-pro',
    name: 'Basic Pro RO Control',
    category: 'ro-control-panels',
    subCategory: 'basic-pro',
    description: 'Essential RO control with basic functionality for small-scale water purification systems.',
    features: [
      { name: 'Range: 250 LPH to 1000 LPH.' },
      { name: 'No Display LED Indications.' },
      { name: 'Automatic Operation .' },
      { name: 'Raw Water Tank Floaty Provision.' },
      { name: 'Treated Water Tank Floaty Provision.' },
      { name: 'HPS Switch Provision.' },
      { name: 'LPS Switch Provision.' }
    ],
    image: robasicpro,
    images: [robasicpro, robasicpro_1, robasicpro_2, robasicpro_3, robasicpro_4, robasicpro_5],
    warranty: '1 year',
    specifications: {
      'Operating Voltage': '230V AC',
      'Current Rating': '10A',
      'Protection': 'Basic overload',
      'Enclosure Rating': 'IP54'
    }
  },
  {
    id: 'ro-panel-led',
    name: 'LED Display RO Control',
    category: 'ro-control-panels',
    subCategory: 'led-display',
    description: 'Advanced RO control with LED display and comprehensive protection features.',
    features: [
      { name: 'Micro Control & SMPS Based RO Panel.' },
      { name: 'Range: 250 LPH to 2000 LPH.' },
      { name: 'Display - LCD Display (16X2).' },
      { name: 'Auto & Manual Mode (Fully Automatic).' },
      { name: 'High & Low Voltage Protections.' },
      { name: 'Current (Dry & Over Load) Protections.' },
      { name: 'Raw Water Tank Floaty Provision.' },
      { name: 'Treated Water Tank Floaty Provision.' },
      { name: 'LPS & HPS Provision.' },
      { name: 'UV & Dosing Pump Provision.' },
      { name: 'Auto Flush & Flush Cycles.' },
      { name: 'Auto Ampere Settings.' },
      { name: 'AMPV Provision.' },
      { name: 'Set Your Company Name & Phone No\'s.' },
      { name: 'Set Service, Backwash & Rinse Times.' },
      { name: 'Set Trip Time Setting.' },
      { name: 'All Settings are Editable.' }
    ],
    image: roledsmart,
    images: [roledsmart, roledsmart_1, roledsmart_2, roledsmart_3, roledsmart_4, roledsmart_5],
    warranty: '1.5 years',
    specifications: {
      'Operating Voltage': '110-240V AC',
      'Current Rating': '15A',
      'Display': '4-digit LED',
      'Enclosure Rating': 'IP55'
    }
  },
  {
    id: 'ro-panel-lcd',
    name: 'LCD Display RO Control',
    category: 'ro-control-panels',
    subCategory: 'lcd-display',
    description: 'Premium RO control with LCD display offering complete automation and monitoring.',
    features: [
      { name: 'Range: 250 LPH to 2000 LPH.' },
      { name: 'Display - LED 7 Segment (4X1).' },
      { name: 'Auto & Manual Mode (Semi Automatic).' },
      { name: 'High & Low Voltage Protections.' },
      { name: 'Micro Control & SMPS Based RO Panel.' },
      { name: 'Current (Dry & Over Load) Protections.' },
      { name: 'Raw Water Tank Floaty Provision.' },
      { name: 'Treated Water Tank Floaty Provision.' },
      { name: 'LPS & HPS Provision.' },
      { name: 'UV & Dosing Pump Provision.' },
      { name: 'Auto Flush & Flush Cycles.' },
      { name: 'Auto Ampere Settings.' },
      { name: 'All Settings are Editable.' }
    ],
    image: rolcdsmart,
    images: [rolcdsmart, rolcdsmart_1, rolcdsmart_2, rolcdsmart_3, rolcdsmart_4, rolcdsmart_5],
    warranty: '2 years',
    specifications: {
      'Operating Voltage': '110-240V AC',
      'Current Rating': '20A',
      'Display': '16x2 LCD',
      'Enclosure Rating': 'IP65'
    }
  },

  // Accessories
  {
    id: 'multi-coin-acceptor',
    name: 'Multi Coin Acceptor',
    category: 'accessories',
    subCategory: 'coin-acceptors',
    description: "High-precision coin acceptor module for water ATM's with multi-coin recognition.",
    features: [
      { name: 'Supports 6 Coin Types' },
      { name: 'High Acceptance Rate' },
      { name: 'Easy Integration' },
      { name: 'Durable Construction' }
    ],
    image: filterCartridge,
    images: [filterCartridge],
    warranty: '1 year',
    specifications: {
      'Voltage': '12V DC',
      'Coin Diameter': '15-30mm',
      'Acceptance Rate': '>98%',
      'Interface': 'Digital Pulse'
    }
  },
  {
    id: 'solenoid-valve',
    name: 'AC Solenoid Valves (3/4" & 1")',
    category: 'accessories',
    subCategory: 'solenoid-valves',
    description: 'High-quality solenoid valves for precise water flow control in dispensing systems.',
    features: [
      { name: 'Brass Body Construction' },
      { name: '24V DC Operation' },
      { name: 'Fast Response Time' },
      { name: 'Long Service Life' }
    ],
    image: uvSterilizer,
    images: [uvSterilizer],
    warranty: '2 years',
    specifications: {
      'Size': '3/4" & 1"',
      'Pressure': '0-10 bar',
      'Voltage': '24V DC',
      'Temperature': '0-60°C'
    }
  },
  {
    id: 'flow-sensor',
    name: 'Water Flow Sensor',
    category: 'accessories',
    subCategory: 'flow-sensors',
    description: 'Accurate flow measurement sensors for monitoring water dispensing volumes.',
    features: [
      { name: 'Hall Effect Sensor' },
      { name: 'Digital Output' },
      { name: 'Compact Design' },
      { name: 'Easy Installation' }
    ],
    image: tdsMeter,
    images: [tdsMeter],
    warranty: '1 year',
    specifications: {
      'Size': '3/4" & 1"',
      'Flow Range': '1-30 LPM',
      'Accuracy': '±3%',
      'Output': 'Pulse Signal'
    }
  },
  {
    id: 'rfid-card',
    name: 'RFID User Cards',
    category: 'accessories',
    subCategory: 'rfid-cards',
    description: 'RFID cards for secure user authentication in card-based water ATM systems.',
    features: [
      { name: '13.56MHz Frequency' },
      { name: '1000+ Read Cycles' },
      { name: 'Waterproof Design' },
      { name: 'Pre-programmed' }
    ],
    image: rfidcards,
    images: [rfidcards],
    warranty: '2 years',
    specifications: {
      'Type': 'MIFARE Classic',
      'Memory': '1KB',
      'Frequency': '13.56MHz',
      'Read Range': '5-10cm'
    }
  }
];

// Utility functions with smooth scrolling enhancements
export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  // Smooth scroll to top when getting a product by ID
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return products.find(product => product.id === id);
};

export const getProductsBySubCategory = (
  category: ProductCategory,
  subCategory: string
): Product[] => {
  // Smooth scroll to top when filtering by subcategory
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return products.filter(
    product => product.category === category && product.subCategory === subCategory
  );
};

// Additional utility function for smooth scrolling to elements
export const smoothScrollToElement = (elementId: string, offset = 0) => {
  if (typeof window !== 'undefined') {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
};