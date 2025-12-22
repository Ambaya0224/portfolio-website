import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

// ProjectCard Component
function ProjectCard({ project, isExpanded, onExpand, onCollapse }) {
  if (isExpanded) {
    return (
      <div
        className="card"
        style={{
          width: "450px",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          overflowY: "auto",
        }}
      >
        <div>
          <h3 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "15px" }}>
            {project.title}
          </h3>
          {project.details && (
            <div
              style={{ fontSize: "1rem", lineHeight: "1.5", textAlign: "justify" }}
              dangerouslySetInnerHTML={{ __html: project.details }}
            />
          )}
        </div>
        <button
          className="btn btn-secondary"
          onClick={onCollapse}
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "5px",
            alignSelf: "center",
          }}
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div
      className="card"
      style={{
        width: "450px",
        height: "500px",
        display: "flex",
        flexDirection: "row",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          flex: "0 0 60%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div>
          <h5 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "15px" }}>
            {project.title}
          </h5>
          <p style={{ fontSize: "1rem", lineHeight: "1.5", marginBottom: "20px", textAlign: "justify" }}>
            {project.description}
          </p>
        </div>
        {project.demoLink ? (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              backgroundColor: "#8D77AB",
              borderColor: "#8D77AB",
              color: "white",
              padding: "10px 20px",
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "5px",
              textDecoration: "none",
              transition: "background-color 0.3s ease",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#7A6599")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#8D77AB")}
          >
            Watch Demo
          </a>
        ) : (
          <button
            className="btn btn-secondary"
            disabled
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "5px",
              backgroundColor: "#ccc",
              color: "#666",
              cursor: "not-allowed",
            }}
          >
            Demo Not Available
          </button>
        )}
      </div>
      <div
        style={{
          flex: "0 0 40%",
          backgroundImage: `url(${project.image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <button
          onClick={onExpand}
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#007BFF",
            fontSize: "0.85rem",
            fontWeight: "normal",
            textDecoration: "none",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "3px 8px",
            borderRadius: "3px",
            border: "none",
            cursor: "pointer",
            transition: "color 0.3s ease, background-color 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.color = "#0056b3";
            e.target.style.backgroundColor = "rgba(230, 230, 230, 0.9)";
          }}
          onMouseOut={(e) => {
            e.target.style.color = "#007BFF";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

// Main Project Component
function Project() {
  const [currentSet, setCurrentSet] = useState(0);
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: "Coffee Machine Project",
      description: "A smart coffee machine system that combines IoT, AI, and cloud technology to deliver a personalized and automated coffee experience.",
      image: "/images/CoffeeMachine-modified.png",
      details: `
        <strong>Description:</strong> A smart coffee machine system that combines IoT, AI, and cloud technology to deliver a personalized and automated coffee experience. The system is designed to learn user preferences, optimize brewing, and allow remote control through web or mobile interfaces.
        <br/><br/>
        <strong>Key Features:</strong>
        <ul>
          <li>AI-Powered Personalization: Learns user taste preferences (strength, temperature, cup size) and recommends brewing options.</li>
          <li>Cloud Connectivity: Stores user profiles and brewing history securely, enabling remote access and updates.</li>
          <li>IoT Integration: Connects with smart home ecosystems and supports voice commands via assistants like Alexa or Google Home.</li>
          <li>Automated Scheduling: Allows users to set brewing times and routines for convenience.</li>
          <li>Data Analytics: Tracks consumption patterns and predicts maintenance needs using machine learning.</li>
        </ul>
        <br/>
        <strong>Technology Stack:</strong>
        <ul>
          <li>Programming Language: Python for backend logic and AI models.</li>
          <li>Cloud Platform: AWS or Azure for hosting, data storage, and remote control.</li>
          <li>AI Solutions:
            <ul>
              <li>Predictive brewing recommendations using machine learning.</li>
              <li>Anomaly detection for machine health monitoring.</li>
              <li>Voice command processing with NLP.</li>
            </ul>
          </li>
          <li>Web Interface: Built with React or Angular for user-friendly dashboards.</li>
        </ul>
        <br/>
        <strong>Benefits:</strong>
        <ul>
          <li>Convenience: Brew coffee remotely or schedule in advance.</li>
          <li>Personalization: Tailored recipes for individual tastes.</li>
          <li>Efficiency: Smart energy management and predictive maintenance.</li>
          <li>Scalability: Cloud-based architecture for multi-device integration.</li>
        </ul>
      `,
    },
    {
      title: "Smart Home Automation Platform",
      description: "A single app to control and automate smart home devices—lighting, HVAC, security, and appliances. Features include voice control, remote access, and AI-driven energy and safety optimizations. Works on mobile, web, and smart displays.",
      image: "/images/SmartHome.png",
      details: `
        <strong>Description:</strong> A single app to control and automate smart home devices—lighting, HVAC, security, and appliances. Features include voice control, remote access, and AI-driven energy and safety optimizations. Works on mobile, web, and smart displays.
        <br/><br/>
        <strong>Key Features:</strong>
        <ul>
          <li>Device Control: Manage lights, thermostats, cameras, locks, and sensors in one app.</li>
          <li>Scenes & Automations: Create routines, schedules, and geofencing triggers.</li>
          <li>Voice Assistants: Works with Alexa, Google Assistant, and Siri.</li>
          <li>Security & Monitoring: Live video, alerts, and doorbell intercom.</li>
          <li>Energy Management: Track usage and optimize schedules.</li>
          <li>Access Control: Roles, guest passes, and smart locks.</li>
          <li>Remote & Offline: Cloud control with local fallback.</li>
          <li>Multi-Home Support: Manage multiple properties easily.</li>
          <li>OTA Updates: Automatic firmware updates.</li>
          <li>Open Ecosystem: Supports major protocols and APIs.</li>
        </ul>
        <br/>
        <strong>Technology Stack:</strong>
        <ul>
          <li>Frontend: React/Next.js, React Native/Flutter.</li>
          <li>Backend: Node.js or Python; MQTT/WebSockets for real-time.</li>
          <li>Database: PostgreSQL/MySQL; Timeseries DB for telemetry.</li>
          <li>Protocols: MQTT, Zigbee, Z-Wave, Matter.</li>
          <li>Cloud & Edge: AWS/Azure + local gateway for reliability.</li>
          <li>Security: TLS, OAuth2, role-based access.</li>
        </ul>
        <br/>
        <strong>AI Features:</strong>
        <ul>
          <li>Energy Optimization: Predictive HVAC and lighting control.</li>
          <li>Anomaly Detection: Alerts for unusual activity or leaks.</li>
          <li>Smart Scheduling: Suggest routines based on habits.</li>
          <li>Computer Vision: Detect people, packages, and pets.</li>
          <li>Predictive Maintenance: Spot failing devices early.</li>
        </ul>
        <br/>
        <strong>Benefits:</strong>
        <ul>
          <li>Convenience: Unified control and automation.</li>
          <li>Energy Savings: Smart scheduling and optimization.</li>
          <li>Safety: Real-time alerts and secure access.</li>
          <li>Scalable: Works with major smart home ecosystems.</li>
        </ul>
      `,
    },
    {
      title: "Weather Forecast App",
      description: "A modern weather application that provides accurate, real-time forecasts and climate insights. It offers hourly and daily predictions, severe weather alerts, and personalized recommendations based on location. Designed for a smooth experience across mobile and web platforms.",
      image: "/images/WeatherApp.png",
      details: `
        <strong>Description:</strong> A modern weather application that provides accurate, real-time forecasts and climate insights. It offers hourly and daily predictions, severe weather alerts, and personalized recommendations based on location. Designed for a smooth experience across mobile and web platforms.
        <br/><br/>
        <strong>Key Features:</strong>
        <ul>
          <li>Real-Time Weather Updates: Current temperature, humidity, wind speed, and air quality.</li>
          <li>Hourly & Daily Forecasts: Detailed predictions for up to 14 days.</li>
          <li>Severe Weather Alerts: Push notifications for storms, floods, or heatwaves.</li>
          <li>Interactive Maps: Radar, satellite imagery, and precipitation overlays.</li>
          <li>Location-Based Services: Auto-detect location and allow multiple saved locations.</li>
          <li>Lifestyle Insights: Suggestions for outdoor activities, travel, and clothing.</li>
          <li>Offline Mode: Cache recent forecasts for offline access.</li>
          <li>Multi-Language Support: Global accessibility with localized content.</li>
        </ul>
        <br/>
        <strong>Technology Stack:</strong>
        <ul>
          <li><strong>Frontend:</strong> React Native or Flutter for mobile apps; React or Angular for web.</li>
          <li><strong>Backend:</strong> Node.js or Python (FastAPI/Django) for APIs.</li>
          <li><strong>Database:</strong> PostgreSQL or MongoDB for user preferences and location data.</li>
          <li><strong>Cloud:</strong> AWS or Azure for hosting and CDN for fast content delivery.</li>
          <li><strong>Weather Data Source:</strong> APIs like OpenWeatherMap, WeatherAPI, or AccuWeather.</li>
        </ul>
        <br/>
        <strong>AI Solutions:</strong>
        <ul>
          <li>Predictive Weather Modeling: Machine learning models to improve short-term and long-term forecast accuracy.</li>
          <li>Personalized Recommendations: AI suggests activities or alerts based on user habits and local conditions.</li>
          <li>Anomaly Detection: Identify sudden weather changes and trigger alerts.</li>
          <li>Climate Trend Analysis: Long-term insights for agriculture, travel, and energy planning.</li>
        </ul>
        <br/>
        <strong>Benefits:</strong>
        <ul>
          <li>Accuracy: Reliable forecasts powered by advanced models and trusted APIs.</li>
          <li>User-Friendly: Intuitive interface with interactive maps and alerts.</li>
          <li>Personalized Experience: AI-driven suggestions tailored to user needs.</li>
          <li>Scalable: Cloud-based architecture for global coverage.</li>
        </ul>
      `,
    },
    {
      title: "Restaurant Management System",
      description: "A platform that simplifies restaurant operations for FOH and BOH—covering reservations, POS, kitchen display, menu management, inventory, staff scheduling, delivery, loyalty, and analytics. Accessible on web, tablets, and mobile.",
      image: "/images/RMS.png",
      details: `
        <strong>Description:</strong> An end-to-end platform that streamlines front-of-house (FOH) and back-of-house (BOH) operations for restaurants, cafés, cloud kitchens, and multi-location chains. It covers table reservations, POS, kitchen display systems, menu engineering, inventory & recipe costing, staff scheduling, delivery integrations, loyalty, and analytics—accessible on web, tablets, and mobile.
        <br/><br/>
        <strong>Key Features:</strong>
        <ul>
          <li>Reservations & Table Management: Floor plan designer, real-time reservations, waitlist, auto seat allocation, guest notes, and turn time tracking.</li>
          <li>Point of Sale (POS): Fast order entry, split bills, discounts/combos, offline mode, tips, and multiple payment methods (cash, card, QR, wallets).</li>
          <li>QR & Self-Service Ordering: Table-side QR menus, self-ordering kiosks, and pay-at-table links to reduce wait times.</li>
          <li>Kitchen Display System (KDS): Course firing, ticket routing by station, prep timers, bump screens, and order throttling.</li>
          <li>Menu & Pricing Management: Variants, modifiers, combos, time-based pricing, 86’ing items, and multi-location menu sync.</li>
          <li>Inventory & Procurement: Stock levels, par levels, vendor catalog, purchase orders, receiving, wastage tracking, and transfers between locations.</li>
          <li>Recipe & Food Costing: Ingredient mapping, yield & shrink, portion control, food cost %, allergen flags, and nutrition data.</li>
          <li>Staff Scheduling & Timekeeping: Shift planning, labor forecasting, clock in/out, overtime rules, payroll exports.</li>
          <li>Delivery & Aggregator Integrations: Uber Eats, DoorDash, Glovo, Bolt Food, and own delivery fleet management with dispatch & driver tracking.</li>
          <li>Customer & Loyalty: Profiles, visit history, points & tiers, vouchers, targeted campaigns (email/SMS/WhatsApp).</li>
          <li>Reports & Analytics: Sales by hour/item/server, menu engineering (stars/plowhorses), labor vs. sales, food cost variance, voids/comps, CoGS, and forecast vs. actual.</li>
          <li>Multi-Location & Franchises: Centralized menus, pricing, inventory, and standardized reporting; franchise fee tracking.</li>
          <li>Compliance & Security: PCI-aware payments, GDPR data controls, HACCP logs (temps & checks), role-based access, audit trails.</li>
        </ul>
        <br/>
        <strong>Technology Stack:</strong>
        <ul>
          <li><strong>Frontend:</strong> React/Next.js (web admin & POS), React Native/Flutter (mobile staff & manager apps), Electron/iPadOS for kiosk/terminal if needed.</li>
          <li><strong>Backend:</strong> Node.js (NestJS/Express) or Python (Django/FastAPI) — REST/GraphQL APIs; real-time via WebSockets.</li>
          <li><strong>Database:</strong> PostgreSQL/MySQL (transactions), Redis (sessions & queue), Elasticsearch/OpenSearch (search & reporting aggregates).</li>
          <li><strong>Cloud & DevOps:</strong> AWS/Azure/GCP, Docker & Kubernetes, CI/CD (GitHub Actions/GitLab CI), CDN, object storage (S3/Blob) for receipts/reports.</li>
          <li><strong>Payments & Integrations:</strong> Stripe/Adyen/PayPal terminals, local acquirers; delivery aggregators; accounting (Xero/QuickBooks/Sage); SMS/email; tax engines.</li>
          <li><strong>Observability:</strong> Logs & metrics (ELK/Prometheus/Grafana), alerting, error tracking (Sentry).</li>
          <li><strong>Edge/Hardware:</strong> Thermal receipt printers, cash drawers, barcode scanners, kitchen screens, NFC/contactless, scales & IoT thermometers (HACCP).</li>
        </ul>
        <br/>
        <strong>AI Solutions:</strong>
        <ul>
          <li>Menu Engineering & Pricing Optimization: Identify high margin vs. high volume items; suggest price adjustments, bundling, and daypart promos.</li>
          <li>Demand & Prep Forecasting: Predict covers and item demand by hour/day to generate prep lists and reduce waste.</li>
          <li>Staffing Optimization: Labor scheduling recommendations based on forecasted sales, reservations, and delivery demand.</li>
          <li>Dynamic Order Throttling: Balance on-premise and delivery capacity—adjust acceptance windows during peaks.</li>
          <li>Customer Segmentation & Retention: RFM analysis, churn prediction, targeted offers, and loyalty tier optimization.</li>
          <li>Anomaly & Fraud Detection: Flag unusual voids/comps, cash discrepancies, and suspicious refund patterns.</li>
        </ul>
      `,
    },
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce solution that enables merchants to list products, manage inventory, process payments, fulfill orders, and engage customers across web and mobile channels. It offers personalized recommendations, robust analytics, and seamless integrations to power B2C, B2B, and marketplace models.",
      image: "/images/ECommerce.png",
      details: `
        <strong>Description:</strong> A full-featured e-commerce solution that enables merchants to list products, manage inventory, process payments, fulfill orders, and engage customers across web and mobile channels. It offers personalized recommendations, robust analytics, and seamless integrations to power B2C, B2B, and marketplace models.
        <br/><br/>
        <strong>Key Features:</strong>
        <ul>
          <li>Product Catalog Management: Variants (size/color), bundles, digital goods, rich media, attributes, and tags.</li>
          <li>Search & Discovery: Faceted search, autosuggest, synonyms, and merchandising rules.</li>
          <li>Shopping Cart & Checkout: Guest checkout, saved carts, one-click payments, address book.</li>
          <li>Payments: Multi-gateway support (Stripe, PayPal, Adyen), PCI-aware workflows, SCA/3DS.</li>
          <li>Pricing & Promotions: Discount codes, tiered pricing, volume/contract pricing (B2B), dynamic pricing.</li>
          <li>Tax & Compliance: Automatic tax calculation (VAT/GST), invoicing, GDPR/CCPA data controls.</li>
          <li>Shipping & Fulfillment: Real-time carrier rates (DHL, UPS), pick-pack-ship, split shipments, partial fulfills.</li>
          <li>Order Management (OMS): Lifecycle tracking, cancellations, returns (RMA), exchanges, backorders.</li>
          <li>Inventory Management: Multi-warehouse stock, safety stock, low stock alerts, back-in-stock notifications.</li>
          <li>Content & CMS: Landing pages, blogs, lookbooks, rich content blocks, translations.</li>
          <li>Customer Accounts: Profiles, wishlists, saved payments, order history, loyalty points & tiers.</li>
          <li>Storefront UX: Responsive design, accessibility (WCAG), fast performance with CDN & caching.</li>
          <li>Marketplace Mode (optional): Multi-vendor onboarding, commissions, vendor dashboards, payouts.</li>
          <li>Analytics & Reporting: Sales, AOV, funnel conversion, cohort & retention, search performance.</li>
          <li>Omnichannel: POS integration, social commerce, headless APIs for native apps and kiosks.</li>
        </ul>
        <br/>
        <strong>Technology Stack:</strong>
        <ul>
          <li><strong>Frontend:</strong> React/Next.js or Vue/Nuxt (SSR/ISR for SEO & speed); React Native/Flutter for mobile apps.</li>
          <li><strong>Backend:</strong> Node.js (NestJS/Express) or Python (Django/FastAPI); GraphQL/REST APIs; message queue (RabbitMQ/Kafka).</li>
          <li><strong>Database:</strong> PostgreSQL/MySQL (transactions), Redis (sessions & cache), Elasticsearch/OpenSearch (search).</li>
          <li><strong>Cloud & DevOps:</strong> AWS/Azure/GCP, Docker & Kubernetes, CI/CD (GitHub Actions/GitLab CI), CDN (CloudFront/Akamai), object storage (S3/Blob).</li>
          <li><strong>Payments & Security:</strong> Payment gateways SDKs, webhook handlers, TLS/HTTPS, tokenization, rate limiting, WAF, PCI DSS-aware architecture.</li>
          <li><strong>Observability:</strong> Centralized logs, metrics, traces (ELK/Prometheus/Grafana, OpenTelemetry).</li>
        </ul>
        <br/>
        <strong>AI Solutions:</strong>
        <ul>
          <li>Personalized Recommendations: Collaborative filtering + content-based models for “Similar items,” “Frequently bought together,” and “Just for you.”</li>
          <li>Search Relevance & Merchandising: Learning to rank models, query intent detection, typo tolerance, and dynamic boosting (margin, inventory, trend).</li>
          <li>Dynamic Pricing & Promotions: Predictive models using demand elasticity, competitor signals, and seasonality to optimize price and discounting.</li>
          <li>Fraud Detection: Real-time anomaly detection on orders, device fingerprints, velocity checks, and chargeback risk scores.</li>
          <li>Churn & LTV Prediction: Identify high-value segments, trigger retention offers, and optimize loyalty tiers.</li>
          <li>Customer Service Automation: NLP chatbots for order status, returns, and product Q&A; intent routing to live agents.</li>
        </ul>
        <br/>
        <strong>Benefits:</strong>
        <ul>
          <li>Conversion Focused: Fast, SEO-friendly storefront with relevant search and tailored recommendations.</li>
          <li>Operational Efficiency: Streamlined OMS, inventory sync, and automated shipping & tax workflows.</li>
          <li>Scalable & Resilient: Cloud-native, microservices-ready architecture for high traffic and peak seasons.</li>
          <li>Secure & Compliant: PCI-aware payments, GDPR/CCPA controls, auditing, and role-based access.</li>
          <li>Extensible Ecosystem: Headless APIs and integrations for ERP, WMS, POS, marketing, and analytics tools.</li>
        </ul>
      `,
    },
    {
      title: "Inventory Management System",
      description: "A comprehensive system to track and manage inventory (products, materials) in real time. It reduces stockouts and overstock, synchronizes purchasing and sales flows, and delivers actionable analytics. Accessible via web and mobile with robust integrations and role-based security.",
      image: "/images/Inventory.png",
      details: `
        <strong>Description:</strong> A comprehensive system to track and manage inventory (products, materials) in real time. It reduces stockouts and overstock, synchronizes purchasing and sales flows, and delivers actionable analytics. Accessible via web and mobile with robust integrations and role-based security.
        <br/><br/>
        <strong>Key Features:</strong>
        <ul>
          <li>Real-Time Inventory Visibility: Track by SKU, batch/lot, serial number, expiration date, and location (rack/bin).</li>
          <li>Inbound & Outbound Movements: Receive, putaway, pick, pack, ship, returns, and inter-warehouse transfers.</li>
          <li>Barcode & QR Scanning: Mobile scanning to reduce errors and speed up operations.</li>
          <li>Reorder Point & Safety Stock: Automated thresholds with configurable rules.</li>
          <li>Batch & Lot Tracking: End-to-end traceability for quality control and recalls.</li>
          <li>Cycle Count & Stocktake: Scheduled partial counts and full audits with variance reconciliation.</li>
          <li>Integrations: POS, eCommerce (Shopify, WooCommerce), ERP/Accounting (SAP, Odoo, QuickBooks).</li>
          <li>Multi Warehouse & Multi Location: Centralized view across branches and sites.</li>
          <li>Order Fulfillment: Pick pack ship workflows, backorders, SLAs and carrier integrations.</li>
          <li>Reports & Analytics: Sales velocity, ABC classification, aging, order fill rate, alerts.</li>
          <li>Permissions & Security: Role based access control, audit trails, encryption.</li>
        </ul>
        <br/>
        <strong>Technology Stack:</strong>
        <ul>
          <li><strong>Frontend:</strong> React or Angular (web), React Native or Flutter (mobile).</li>
          <li><strong>Backend:</strong> Node.js (NestJS/Express) or Python (FastAPI/Django) — REST/GraphQL APIs.</li>
          <li><strong>Database:</strong> PostgreSQL/MySQL (transactions), Redis (cache), Elasticsearch/OpenSearch (search).</li>
          <li><strong>Cloud & DevOps:</strong> AWS/Azure/GCP, Docker & Kubernetes, CI/CD (GitHub Actions/GitLab CI), CDN.</li>
          <li><strong>Edge/Devices:</strong> Android-based scanners (Zebra SDK), Bluetooth label printers, WebUSB/WebBluetooth.</li>
        </ul>
        <br/>
        <strong>AI Solutions:</strong>
        <ul>
          <li>Demand Forecasting: Use SARIMA, XGBoost, or LSTM models on seasonal patterns, campaigns, and channel sales to predict demand and dynamically update reorder points and safety stock.</li>
          <li>Automated ABC/XYZ Classification: Classify items by contribution and variability to optimize slotting and counting frequency.</li>
          <li>Anomaly Detection: Identify theft, mis-picks, sudden swings, or incorrect transfers and trigger alerts.</li>
          <li>Optimized Picking Paths: Generate shortest routes based on warehouse maps and item locations to reduce travel time.</li>
          <li>Supplier & Lead-Time Analytics: Measure delivery performance and variability to improve EOQ and lot sizes.</li>
        </ul>
        <br/>
        <strong>Benefits:</strong>
        <ul>
          <li>Error Reduction: Scanning, standardization, and audits minimize mistakes.</li>
          <li>Data-Driven Decisions: Forecasts and analytics improve purchasing and replenishment.</li>
          <li>Cost Savings: Reduce excess inventory and stockouts; improve cash flow.</li>
          <li>Scalability: Support multi-warehouse, omnichannel operations with ease.</li>
          <li>Unified Ecosystem: Integrations with POS/eCommerce/Accounting remove duplication.</li>
        </ul>
      `,
    },
    {
      title: "Dental Clinic Management System",
      description: "A comprehensive management platform designed for dental clinics to streamline patient care, appointment scheduling, billing, and inventory management. It ensures efficient operations, improved patient experience, and secure record-keeping.",
      image: "/images/DentalImage.png",
      details: `
        <strong>Description:</strong> A comprehensive management platform designed for dental clinics to streamline patient care, appointment scheduling, billing, and inventory management. It ensures efficient operations, improved patient experience, and secure record-keeping.
        <br/><br/>
        <strong>Key Features:</strong>
        <ul>
          <li>Patient Records Management: Store and manage patient history, treatment plans, and prescriptions.</li>
          <li>Appointment Scheduling: Real-time booking, rescheduling, and reminders.</li>
          <li>Billing & Invoicing: Automated billing with insurance integration.</li>
          <li>Inventory Management: Track dental supplies and equipment.</li>
          <li>Treatment Planning: Visual charts and progress tracking for dental procedures.</li>
          <li>Reporting & Analytics: Generate reports on revenue, appointments, and patient trends.</li>
          <li>Multi-Device Access: Accessible via web and mobile for staff and patients.</li>
        </ul>
        <br/>
        <strong>Technology Stack:</strong>
        <ul>
          <li><strong>Frontend:</strong> React or Angular for web; React Native or Flutter for mobile apps.</li>
          <li><strong>Backend:</strong> Node.js or Python (Django/FastAPI) for APIs.</li>
          <li><strong>Database:</strong> PostgreSQL or MySQL for patient and clinic data.</li>
          <li><strong>Cloud:</strong> AWS or Azure for hosting and secure data storage.</li>
          <li><strong>Security:</strong> HIPAA-compliant encryption for patient data.</li>
        </ul>
        <br/>
        <strong>AI Solutions:</strong>
        <ul>
          <li>Appointment Optimization: AI predicts peak hours and suggests optimal scheduling.</li>
          <li>Treatment Recommendations: Machine learning suggests procedures based on patient history.</li>
          <li>Chatbot Assistance: NLP-powered virtual assistant for patient queries and bookings.</li>
          <li>Predictive Analytics: Forecast inventory needs and revenue trends.</li>
        </ul>
        <br/>
        <strong>Benefits:</strong>
        <ul>
          <li>Efficiency: Automates administrative tasks for smooth clinic operations.</li>
          <li>Patient-Centric: Improves experience with easy booking and personalized care.</li>
          <li>Secure: HIPAA-compliant data protection.</li>
          <li>Scalable: Suitable for single clinics or multi-location dental chains.</li>
        </ul>
      `,
    },
    {
      title: "Fitness Tracker App",
      description: "A smart fitness tracking application that helps users monitor workouts, nutrition, and overall health. It provides real-time activity tracking, personalized fitness plans, and AI-driven insights to improve performance and maintain a healthy lifestyle.",
      image: "/images/FitnessApp.png",
      details: `
        <strong>Description:</strong> A smart fitness tracking application that helps users monitor workouts, nutrition, and overall health. It provides real-time activity tracking, personalized fitness plans, and AI-driven insights to improve performance and maintain a healthy lifestyle.
        <br/><br/>
        <strong>Key Features:</strong>
        <ul>
          <li>Activity Tracking: Monitor steps, distance, calories burned, and heart rate.</li>
          <li>Workout Plans: Personalized exercise routines for different goals (weight loss, muscle gain, endurance).</li>
          <li>Nutrition Logging: Track daily calorie intake and macronutrients.</li>
          <li>Progress Dashboard: Visualize fitness trends and achievements.</li>
          <li>Goal Setting: Set and track fitness goals with reminders.</li>
          <li>Integration: Sync with wearables like smartwatches and fitness bands.</li>
          <li>Social Sharing: Share progress with friends and join fitness challenges.</li>
        </ul>
        <br/>
        <strong>Technology Stack:</strong>
        <ul>
          <li><strong>Frontend:</strong> React Native or Flutter for mobile apps.</li>
          <li><strong>Backend:</strong> Node.js or Python (FastAPI/Django) for APIs.</li>
          <li><strong>Database:</strong> PostgreSQL or MongoDB for user and activity data.</li>
          <li><strong>Cloud:</strong> AWS or Azure for hosting and real-time sync.</li>
          <li><strong>Wearable Integration:</strong> APIs for Fitbit, Apple Health, Google Fit.</li>
        </ul>
        <br/>
        <strong>AI Solutions:</strong>
        <ul>
          <li>Personalized Workout Recommendations: Machine learning based on user history and goals.</li>
          <li>Predictive Health Insights: AI detects patterns and suggests preventive measures.</li>
          <li>Calorie Estimation: Computer vision for food recognition and calorie calculation.</li>
          <li>Anomaly Detection: Alerts for irregular heart rate or activity patterns.</li>
        </ul>
        <br/>
        <strong>Benefits:</strong>
        <ul>
          <li>Health-Oriented: Encourages active lifestyle and better nutrition.</li>
          <li>Personalized Experience: AI-driven fitness plans tailored to user goals.</li>
          <li>Scalable: Cloud-based architecture for millions of users.</li>
          <li>Connected: Integrates with popular wearables and health platforms.</li>
        </ul>
      `,
    },
    {
      title: "Online Learning Platform",
      description: "A modern e-learning platform that provides interactive courses, video lectures, and assessments for learners worldwide. It supports personalized learning paths, real-time progress tracking, and AI-driven recommendations to enhance engagement and knowledge retention.",
      image: "/images/OnlineLearning.png",
      details: `
        <strong>Description:</strong> A modern e-learning platform that provides interactive courses, video lectures, and assessments for learners worldwide. It supports personalized learning paths, real-time progress tracking, and AI-driven recommendations to enhance engagement and knowledge retention.
        <br/><br/>
        <strong>Key Features:</strong>
        <ul>
          <li>Course Catalog: Wide range of subjects including tech, business, and creative skills.</li>
          <li>Video Lectures & Live Classes: High-quality streaming with adaptive bitrate.</li>
          <li>Interactive Quizzes & Assignments: Assess learning progress effectively.</li>
          <li>Personalized Learning Paths: AI suggests courses based on interests and goals.</li>
          <li>Certificates & Badges: Earn credentials upon course completion.</li>
          <li>Community & Discussion Forums: Engage with peers and instructors.</li>
          <li>Offline Mode: Download lectures for learning without internet.</li>
          <li>Multi-Device Support: Seamless experience across web and mobile.</li>
        </ul>
        <br/>
        <strong>Technology Stack:</strong>
        <ul>
          <li><strong>Frontend:</strong> React or Angular for web; React Native or Flutter for mobile apps.</li>
          <li><strong>Backend:</strong> Node.js or Python (Django/FastAPI) for APIs.</li>
          <li><strong>Database:</strong> PostgreSQL or MongoDB for user, course, and progress data.</li>
          <li><strong>Cloud:</strong> AWS or Azure for hosting, CDN for fast content delivery.</li>
          <li><strong>Media Processing:</strong> FFmpeg for video encoding and streaming optimization.</li>
        </ul>
        <br/>
        <strong>AI Solutions:</strong>
        <ul>
          <li>Personalized Recommendations: Collaborative filtering and deep learning for course suggestions.</li>
          <li>Automated Grading: NLP and ML for evaluating quizzes and assignments.</li>
          <li>Speech-to-Text & Translations: AI-powered transcription and multilingual support.</li>
          <li>Learning Analytics: Predictive models to identify learners at risk and suggest interventions.</li>
        </ul>
        <br/>
        <strong>Benefits:</strong>
        <ul>
          <li>Accessible Education: Learn anytime, anywhere.</li>
          <li>Personalized Experience: AI-driven learning paths tailored to user goals.</li>
          <li>Scalable: Cloud-based architecture for global reach.</li>
          <li>Engaging: Interactive features and community support for better retention.</li>
        </ul>
      `,
    },
    {
      title: "Cab Service Management System",
      description: "A cloud-based platform to manage cab bookings, drivers, and routes efficiently. It includes real-time ride tracking, automated fare calculation, and secure payment integration. AI algorithms optimize route planning and predict demand for better resource allocation.",
      image: "/images/Portfolio.png",
      details: `
        <strong>Description:</strong> A cloud-based platform to manage cab bookings, drivers, and routes efficiently. It includes real-time ride tracking, automated fare calculation, and secure payment integration. AI algorithms optimize route planning and predict demand for better resource allocation.
        <br/><br/>
        <strong>Key Features:</strong>
        <ul>
          <li>Booking Management: Customers can book rides via web or mobile apps.</li>
          <li>Driver Dashboard: Real-time trip updates and earnings tracking.</li>
          <li>AI-Powered Route Optimization: Suggests shortest and fastest routes.</li>
          <li>Cloud Integration: Stores ride history, user profiles, and payment data securely.</li>
          <li>API Support: Integrates with maps, payment gateways, and third-party services.</li>
        </ul>
        <br/>
        <strong>Technology Stack:</strong>
        <ul>
          <li><strong>Frontend:</strong> React/Next.js or Flutter for mobile.</li>
          <li><strong>Backend:</strong> C# ASP.NET Core or Node.js.</li>
          <li><strong>Database:</strong> PostgreSQL for ride data; Redis for caching.</li>
          <li><strong>Cloud:</strong> Azure or AWS for hosting and real-time services.</li>
        </ul>
        <br/>
        <strong>AI Solutions:</strong>
        <ul>
          <li>Demand prediction using time-series models (LSTM or Prophet).</li>
          <li>Dynamic pricing based on demand and traffic conditions.</li>
          <li>Route optimization using graph algorithms and ML.</li>
        </ul>
      `,
    },
    { title: "Handwritten Digit Recognition (MNIST)", description: "A machine learning project that classifies handwritten digits (0–9) using the MNIST dataset. This system leverages deep learning techniques to accurately recognize digits from grayscale images, commonly used in postal code recognition, banking, and document digitization.", image: "/pictures/ChatApp.png" },
    { title: "Task Management Tool", description: "A powerful task management platform designed to help individuals and teams organize, prioritize, and track their work efficiently. It supports real-time collaboration, smart scheduling, and progress tracking, ensuring productivity and streamlined workflows across projects.", image: "/pictures/TaskManager.png" },
    { title: "MedAuth", description: "A secure healthcare authentication and authorization platform designed for clinics, hospitals, and telemedicine services. MedAuth ensures compliance with healthcare standards (HIPAA, GDPR) while providing seamless access control for patients, doctors, and administrators.", image: "/pictures/BlogPlatform.png" },
    { title: "Video Streaming App", description: "A next-generation video streaming platform that allows users to watch, download, and share movies, TV shows, and original content. It offers personalized recommendations, adaptive streaming quality, and multi-device synchronization for an immersive viewing experience.", image: "/pictures/VideoStreaming.png" },
    { title: "Travel Booking System", description: "A comprehensive travel booking platform that enables users to search, compare, and book flights, hotels, and rental cars. It offers personalized travel recommendations, secure payment options, and real-time availability updates. Designed for a seamless and hassle-free travel planning experience across devices.", image: "/pictures/TravelBooking.png" },
    { title: "Expense Tracker", description: "A smart application designed to help users monitor and manage their daily expenses. It provides insights into spending patterns, helps set budgets, and generates reports for better financial planning. The system can integrate AI for predictive analytics and cloud for secure data storage.", image: "/pictures/ExpenseTracker.png" },
    { title: "Music Player App", description: "A modern music player application that allows users to play, organize, and manage their favorite tracks. It supports playlist creation, offline playback, and personalized recommendations powered by AI. Designed for a seamless and immersive audio experience across devices.", image: "/pictures/MusicPlayer.png" },
    { title: "Sentiment Analysis for Machine Learning", description: "A machine learning project that analyzes text data to determine sentiment (positive, negative, or neutral).", image: "/pictures/SentimentAnalysis.png" },
    { title: "Heart Disease Prediction (Machine Learning)", description: "A predictive model that uses machine learning to assess the likelihood of heart disease based on patient data.", image: "/pictures/HeartDiseasePrediction.png" },
    { title: "Brain Tumor Detection", description: "A deep learning project that detects brain tumors from MRI images using convolutional neural networks (CNNs).", image: "/pictures/BrainTumorDetection.png", demoLink: "https://btd-mobilenetv2-svm-ganbayar.streamlit.app/" },
    { title: "Fruit Classification System", description: "An image classification system that identifies different types of fruits using machine learning.", image: "/pictures/FruitClassification.png", demoLink: "https://ganbayar-fruit-prediction.streamlit.app/" },
    { title: "Waste Classifier", description: "An AI-powered waste classification system that categorizes waste into recyclable and non-recyclable materials.", image: "/pictures/WasteClassifier.png", demoLink: "https://waste-classifier-app-ganbayar.streamlit.app/" },
    {
      title: "Spam Email Detection (Machine Learning)",
      description: "A machine learning-based system that classifies emails as spam or not spam using text analysis and predictive models. This project helps filter unwanted emails and improve inbox security by leveraging NLP and supervised learning techniques.",
      image: "/images/SpamEmail.png",
      details: `
        <strong>Description:</strong> A machine learning-based system that classifies emails as spam or not spam using text analysis and predictive models. This project helps filter unwanted emails and improve inbox security by leveraging NLP and supervised learning techniques.
        <br/><br/>
        <strong>Key Features:</strong>
        <ul>
          <li><strong>Dataset:</strong> Commonly uses the Enron Email Dataset or SpamAssassin dataset.</li>
          <li><strong>Text Preprocessing:</strong>
            <ul>
              <li>Tokenization, stop-word removal, stemming/lemmatization.</li>
              <li>Feature extraction using TF-IDF or word embeddings.</li>
            </ul>
          </li>
          <li><strong>Model Options:</strong>
            <ul>
              <li>Classical ML: Naive Bayes, Logistic Regression, SVM.</li>
              <li>Advanced: Random Forest, Gradient Boosting, or deep learning models (LSTM).</li>
            </ul>
          </li>
          <li><strong>Evaluation Metrics:</strong> Accuracy, Precision, Recall, F1-score.</li>
          <li><strong>Deployment:</strong> REST API or integrated into email clients for real-time filtering.</li>
        </ul>
        <br/>
        <strong>Technology Stack:</strong>
        <ul>
          <li><strong>Programming Language:</strong> Python.</li>
          <li><strong>Libraries:</strong> Scikit-learn, NLTK, SpaCy, TensorFlow/PyTorch for advanced models.</li>
          <li><strong>Cloud Integration:</strong> AWS or Azure for scalable deployment.</li>
          <li><strong>AI Solutions:</strong>
            <ul>
              <li>NLP-based feature extraction.</li>
              <li>Supervised learning for classification.</li>
              <li>Ensemble models for improved accuracy.</li>
            </ul>
          </li>
        </ul>
        <br/>
        <strong>Benefits:</strong>
        <ul>
          <li><strong>Security:</strong> Reduces phishing and spam risks.</li>
          <li><strong>Efficiency:</strong> Automates email filtering for large volumes.</li>
          <li><strong>Scalability:</strong> Cloud deployment for enterprise-level email systems.</li>
        </ul>
      `,
    },
  ];

  const projectSets = [];
  for (let i = 0; i < projects.length; i += 3) {
    projectSets.push(projects.slice(i, i + 3));
  }

  const handleButtonClick = (setIndex) => {
    setCurrentSet(setIndex);
  };

  return (
    <div className="projects-container" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Navigation Menu */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#BBDCE5" }} data-bs-theme="light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Projects</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skills">Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/education">Education</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/certificate">Certifications</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            <span className="navbar-text">
              <img
                src="/images/Ambaya-Icon-modified.png"
                alt="AmbayaSoft Icon"
                style={{ width: "25px", height: "25px", marginRight: "10px" }}
              />
              AmbayaSoft
            </span>
          </div>
        </div>
      </nav>

      {/* Main Projects Section */}
      <main className="projects-main-section" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "5px", justifyItems: "center" }}>
        <h1 className="text-center fw-bold my-4" style={{ color: "black", gridColumn: "1 / -1" }}>Projects</h1>
        {projectSets[currentSet].map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            isExpanded={expandedProject === project.title}
            onExpand={() => setExpandedProject(project.title)}
            onCollapse={() => setExpandedProject(null)}
          />
        ))}
      </main>

      {/* Pagination Section */}
      <section className="pagination-section">
        {projectSets.map((_, index) => (
          <button
            key={index}
            className="btn"
            onClick={() => handleButtonClick(index)}
            style={{
              margin: "0 5px",
              padding: "10px 20px",
              backgroundColor: currentSet === index ? "#8D77AB" : "#BBDCE5",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {index + 1}
          </button>
        ))}
      </section>

      {/* Footer */}
      <footer className="projects-footer" style={{ marginTop: "auto" }}>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </footer>
    </div>
  );
}

export default Project;