import { useState, useEffect } from "react";
import { ExternalLink } from "./icons/ExternalLink";
import { ChevronLeft, ChevronRight } from 'lucide-react';

import orderManagementThumbnail from "../assets/project-thumbnail/order-management.png";
import roofingWebsiteThumbnail from "../assets/project-thumbnail/roofing-website.png";
import bayfitNetworkThumbnail from "../assets/project-thumbnail/bayfit-network.png";
import routeOptimizationThumbnail from "../assets/project-thumbnail/route-optimization.png";
import logisticsDashboardThumbnail from "../assets/project-thumbnail/logistics-dashboard.png";
import travelWebsiteThumbnail from "../assets/project-thumbnail/travel-website.png";
import ecommerceWebsiteThumbnail from "../assets/project-thumbnail/ecommerce-website.png";
import budgetTrackerThumbnail from "../assets/project-thumbnail/budget-tracker.png";
import insightsDashboardThumbnail from "../assets/project-thumbnail/insights-dashboard.png";
import procurementManagementThumbnail from "../assets/project-thumbnail/procurement-management.png";
import enterpriseHrisThumbnail from "../assets/project-thumbnail/enterprise-hris.png";
import shipmentDashboardThumbnail from "../assets/project-thumbnail/shipment-dashboard.png";
import fleetManagementThumbnail from "../assets/project-thumbnail/fleet-management.png";
import warehouseInventoryThumbnail from "../assets/project-thumbnail/warehouse-inventory.png";
import recipeRecommenderThumbnail from "../assets/project-thumbnail/recipe-recommender.png";
import supplierManagementThumbnail from "../assets/project-thumbnail/supplier-management.png";
import clientManagementThumbnail from "../assets/project-thumbnail/client-management.png";
import dataReportingThumbnail from "../assets/project-thumbnail/data-reporting.png";
import customerRelationshipThumbnail from "../assets/project-thumbnail/customer-relationship.png";
import stockSentimentThumbnail from "../assets/project-thumbnail/stock-sentiment.png";
import legalSimilarityThumbnail from "../assets/project-thumbnail/legal-similarity.png";
import aiCommuteThumbnail from "../assets/project-thumbnail/ai-commute.png";
import taskOrganizerThumbnail from "../assets/project-thumbnail/task-organizer.png";
import ecommerceMarketplaceThumbnail from "../assets/project-thumbnail/ecommerce-marketplace.png";
import learnerManagementThumbnail from "../assets/project-thumbnail/learner-management.png";
import commuteAssistantThumbnail from "../assets/project-thumbnail/commute-assistant.png";
import habitTrackerThumbnail from "../assets/project-thumbnail/habit-tracker.png";
import dentalSchedulerThumbnail from "../assets/project-thumbnail/dental-scheduler.png";
import libraryManagementThumbnail from "../assets/project-thumbnail/library-management.png";
import petManagementThumbnail from "../assets/project-thumbnail/pet-management.png";
import chineseRestaurantThumbnail from "../assets/project-thumbnail/chinese-restaurant.png";
import environmentalMonitorThumbnail from "../assets/project-thumbnail/environmental-monitor.png";
import automatedGuestServicesThumbnail from "../assets/project-thumbnail/guest-services.png";
import multiPropertyAdminSuiteThumbnail from "../assets/project-thumbnail/admin-suite.png";
import serviceRequestPlatformThumbnail from "../assets/project-thumbnail/service-request.png";
import walkinQueueTicketSystemThumbnail from "../assets/project-thumbnail/ticket-system.png";
import sparePartsManagementThumbnail from "../assets/project-thumbnail/spare-management.png";
import equipmentToolManagementThumbnail from "../assets/project-thumbnail/tool-management.png";
import storeInventoryManagerThumbnail from "../assets/project-thumbnail/store-inventory.png";
import supplyRestockingNotificationThumbnail from "../assets/project-thumbnail/restocking-system.png";
import employeeShiftAttendanceSchedulerThumbnail from "../assets/project-thumbnail/attendance-scheduler.png";
import digitalMenuQrCodeGeneratorThumbnail from "../assets/project-thumbnail/digital-menu.png";
import feedbackRatingManagerThumbnail from "../assets/project-thumbnail/rating-manager.png";
import digitalGiftCardSystemThumbnail from "../assets/project-thumbnail/digital-giftcard.png";
import skillTutoringPlatformThumbnail from "../assets/project-thumbnail/skill-tutoring.png";
import handmadeGoodsEcommerceThumbnail from "../assets/project-thumbnail/handmade-goods.png";
import pickupDeliveryLaundryServiceThumbnail from "../assets/project-thumbnail/laundry-service.png";
import preOrderSystemTakeoutMealPrepThumbnail from "../assets/project-thumbnail/meal-prep.png";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["All", "AI/ML", "Dashboards", "Web Apps"];

  const projects = [
    {
      id: 1,
      title: "Order Management Dashboard",
      description: "Streamline order processing and monitor fulfillment progress.",
      details: "Incorporating efficient order management and tracking with AI-powered demand forecasting for inventory and logistics.",
      technologies: ["ReactJS", "TypeScript", "FastAPI", "PyTorch", "PostgreSQL"],
      link: "http://purchaseflow.free.nf/orders",
      category: "AI/ML",
      type: "Client",
      thumbnail: orderManagementThumbnail,
    },
    {
      id: 2,
      title: "Roofing Company Website",
      description: "Roofing company website wi+th AI customer service chatbot.",
      details: "Integrated an AI chatbot to offer instant customer support and address common inquiries.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "LangChain"],
      link: "http://heartland-roofing.free.nf/",
      category: "AI/ML",
      type: "Client",
      thumbnail: roofingWebsiteThumbnail,
    },
    {
      id: 3,
      title: "Fitness Subscription Website",
      description: "AI-powered website for a fitness subscription service.",
      details: "Provides a subscription platform for fitness enthusiasts, offering AI-powered personalized workout plans and nutrition advice.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "LangChain"],
      link: "http://bayfit-network.free.nf/",
      category: "AI/ML",
      type: "Client",
      thumbnail: bayfitNetworkThumbnail,
    },
    {
      id: 4,
      title: "Route Optimization Dashboard",
      description: "Optimizes delivery routes for fleet management.",
      details: "Utilizes AI/ML algorithms to predict optimal delivery routes based on real-time traffic, historical data, and delivery constraints.",
      technologies: ["ReactJS", "TypeScript", "FastAPI", "PyTorch", "PostgreSQL"],
      link: "http://routelogic.free.nf/",
      category: "AI/ML",
      type: "Client",
      thumbnail: routeOptimizationThumbnail,
    },
    {
      id: 5,
      title: "Logistics Operations Dashboard",
      description: "Centralized dashboard for Logistics and fleet management",
      details: "Monitors fleet performance, optimizes delivery routes, and provides cost analysis with interactive dashboards.",
      technologies: ["ReactJS", "TypeScript", "FastAPI", "PostgreSQL", "Chart.JS"],
      link: "http://logidash.free.nf/",
      category: "Dashboards", 
      type: "Personal",
      thumbnail: logisticsDashboardThumbnail,
    },
    {
      id: 6,
      title: "Travel Booking Website",
      description: "A travel planning app that helps users find and book trips.",
      details: "Offers personalized travel recommendations and booking options based on user preferences.",
      technologies: ["ReactJS", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL"],
      link: "http://travelease.free.nf/",
      category: "Web Apps",
      type: "Client",
      thumbnail: travelWebsiteThumbnail,
    },
    {
      id: 7,
      title: "E-commerce Marketplace",
      description: "An e-commerce platform for buying and selling products.",
      details: "Features a user-friendly interface for browsing products, managing orders, and processing payments.",
      technologies: ["ReactJS", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL"],
      link: "http://snapmart.free.nf/",
      category: "Web Apps",
      type: "Client",
      thumbnail: ecommerceWebsiteThumbnail,
    },
    {
      id: 8,
      title: "Smart Budget Tracker",
      description: "An intelligent web app for personal finance management.",
      details: "Offers comprehensive tools for tracking income and expenses, setting budgets, categorizing transactions, and providing financial insights.",
      technologies: ["ReactJS", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL"],
      category: "Web Apps",
      link: "http://budgetbuddy.free.nf/",
      type: "Personal",
      thumbnail: budgetTrackerThumbnail,
    },
    {
      id: 9,
      title: "Insights Dashboard",
      description: "A dynamic dashboard with analytics and reporting.",
      details: "Offers customizable visualizations for tracking key performance indicators, analyzing trends, and gaining actionable insights.",
      technologies: ["ReactJS", "TypeScript", "FastAPI", "PostgreSQL", "Chart.JS"],
      link: "http://analytiqx.free.nf/",
      category: "Dashboards",
      type: "Personal",
      thumbnail: insightsDashboardThumbnail,
    },
    {
      id: 10,
      title: "Procurement Management System",
      description: "Management system with real-time analytics",
      details: "Tracks procurement processes, vendor contracts, and financial insights with real-time analytics and reporting tools.",
      technologies: ["ReactJS", "TypeScript", "FastAPI", "PostgreSQL", "Chart.JS"],
      link: "http://procuremate.free.nf/",
      category: "Dashboards",
      type: "Personal",
      thumbnail: procurementManagementThumbnail,
    },
    {
      id: 11,
      title: "Enterprice HRIS",
      description: "Comprehensive workforce management platform",
      details: "Manages employee profiles, attendance tracking, payroll, and HR analytics with an intuitive UI and role-based access control.",
      technologies: ["ReactJS", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL"],
      link: "http://corehrx.free.nf/",
      category: "Web Apps",
      type: "Personal",
      thumbnail: enterpriseHrisThumbnail,
    },
    {
      id: 12,
      title: "Shipment Tracking Dashboard",
      description: "Track shipments in real time with up-to-date delivery status.",
      details: "Provides real-time tracking of shipments, ensuring timely updates on delivery status.",
      technologies: ["ReactJS", "TypeScript", "FastAPI", "PostgreSQL", "Chart.JS"],
      link: "http://shipdirect.free.nf/shipments",
      category: "Dashboards",
      type: "Personal",
      thumbnail: shipmentDashboardThumbnail,
    },
    {
      id: 13,
      title: "Vehicle Fleet Management Dashboard",
      description: "Manage vehicle inventory and maintenance.",
      details: "Centralizes vehicle management, including inventory tracking and maintenance scheduling.",
      technologies: ["ReactJS", "TypeScript", "FastAPI", "PostgreSQL", "Chart.JS"],      
      link: "http://fleetly.free.nf/vehicles",
      category: "Dashboards",
      type: "Personal",
      thumbnail: fleetManagementThumbnail,
    },
    {
      id: 14,
      title: "Warehouse Inventory Dashboard",
      description: "Optimizes warehouse operations and stock tracking.",
      details: "Enhances warehouse management through effective stock tracking and storage optimization.",
      technologies: ["ReactJS", "TypeScript", "FastAPI", "PostgreSQL", "Chart.JS"],      
      link: "http://warehouseiq.free.nf/warehouse",
      category: "Dashboards",
      type: "Personal",
      thumbnail: warehouseInventoryThumbnail,
    },
    {
      id: 15,
      title: "Recipe Recommender System",
      description: "Suggests recipes based on user preferences and ingredients.",
      details:
        "Utilizes machine learning algorithms to recommend recipes tailored to user tastes and dietary restrictions.",
      technologies: ["ReactJS", "TypeScript", "FastAPI", "PyTorch", "PostgreSQL"],
      category: "AI/ML",
      link: "http://recipegram.free.nf/",
      type: "Personal",
      thumbnail: recipeRecommenderThumbnail,
    },
    {
      id: 16,
      title: "Supplier Management Dashboard",
      description: "Manage supplier performance and compliance.",
      details: "Tracks supplier metrics such as delivery timeliness, product quality, and cost efficiency.",
      technologies: ["ReactJS", "TypeScript", "FastAPI", "PostgreSQL", "Chart.JS"],      
      link: "http://supplierbase.free.nf/suppliers",
      category: "Dashboards",
      type: "Personal",
      thumbnail: supplierManagementThumbnail,
    },
    {
      id: 17,
      title: "Customer Management Dashboard",
      description: "Accesses customer profiles and engagement metrics.",
      details: "Provides insights into customer interactions and engagement for better relationship management.",
      technologies: ["ReactJS", "TypeScript", "FastAPI", "PostgreSQL", "Chart.JS"],
      link: "http://clientsync.free.nf/",
      category: "Dashboards",
      type: "Client",
      thumbnail: clientManagementThumbnail,
    },
    {
      id: 18,
      title: "Data Reporting Platform",
      description: "Manages and generates reports for various departments.",
      details: "Integrates with the company's database to generate reports for various departments.",
      technologies: ["ReactJS", "TypeScript", "FastAPI", "PostgreSQL", "Chart.JS"],
      link: "http://reportgenius.free.nf/",
      category: "Dashboards",
      type: "Client",
      thumbnail: dataReportingThumbnail,
    },
    {
      id: 19,
      title: "Customer Relationship Management System",
      description: "Manages customer relationships and interactions.",
      details: "Provides tools for managing customer relationships, including customer profiles, interactions, and support.",
      technologies: ["ReactJS", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL"],
      link: "http://connectsphere.free.nf/",
      category: "Web Apps",
      type: "Client",
      thumbnail: customerRelationshipThumbnail,
    },
    {
      id: 20,
      title: "Stock Market Sentiment Analyzer",
      description: "Real-time sentiment analysis for stock market",
      details: "Analyzes stock market using NLP techniques, sentiment scoring models, and interactive dashboards.",
      technologies: ["ReactJS", "TypeScript", "FastAPI", "Sci-Kit Learn", "PostgreSQL"],
      category: "AI/ML",
      link: "http://stocksentio.free.nf/",
      type: "Personal",
      thumbnail: stockSentimentThumbnail,
    },
    {
      id: 21,
      title: "GPT-Powered Legal Case Similarity Finder",
      description: "Finds similar legal cases based on a case description.",
      details: "Utilizes GPT-based embeddings and vector search to help legal professionals find past cases similar to a given legal issue.",
      technologies: ["ReactJS", "TypeScript", "FastAPI", "PyTorch", "PostgreSQL"],
      category: "AI/ML",
      link: "http://casematchai.free.nf/",
      type: "Personal",
      thumbnail: legalSimilarityThumbnail,
    },
    {
      id: 22,
      title: "AI-Powered Commute Assistant",
      description: "Provides step-by-step instructions for urban transportation.",
      details: "Uses AI to suggest optimal public transport routes in Metro Manila, considering jeepneys, buses, trains, and tricycles.",
      technologies: ["ReactJS", "TypeScript", "FastAPI", "PyTorch", "PostgreSQL"],
      category: "AI/ML",
      link: "http://waylo.free.nf/",
      type: "Personal",
      thumbnail: aiCommuteThumbnail,
    },
    {
      id: 23,
      title: "Task & Notes Organizer",
      description: "Organizes tasks and notes with a user-friendly interface.",
      details: "Provides a user-friendly interface for organizing tasks and notes, including reminders and categorization.",
      technologies: ["ReactJS", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL"],
      category: "Web Apps",
      link: "http://stickyboard.free.nf/",
      type: "Personal",
      thumbnail: taskOrganizerThumbnail,
    },
    {
      id: 24,
      title: "Ecommerce Marketplace",
      description: "An online marketplace for buying and selling products.",
      details: "Provides a user-friendly interface for browsing products, managing orders, and processing payments.",
      technologies: ["ReactJS", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL"],
      category: "Web Apps",
      link: "http://cartella.free.nf/",
      type: "Personal",
      thumbnail: ecommerceMarketplaceThumbnail,
    },
    {
      id: 25,
      title: "Learner Management System",
      description: "System for managing learner profiles and progress.",
      details: "Provides a user-friendly interface for managing learner profiles, attendance, and progress.",
      technologies: ["ReactJS", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL"],
      category: "Web Apps",
      link: "http://edutracklms.free.nf/",
      type: "Personal",
      thumbnail: learnerManagementThumbnail,
    },
    {
      id: 26,
      title: "AI Commute Assistant",
      description: "A system for managing commute routes and traffic conditions.",
      details: "Provides a user-friendly interface for managing commute routes and traffic conditions.",
      technologies: ["ReactJS", "TypeScript", "FastAPI", "PyTorch", "PostgreSQL"],
      category: "AI/ML",
      link: "http://commutegpt.free.nf/",
      type: "Personal",
      thumbnail: commuteAssistantThumbnail,
    },
    {
      id: 27,
      title: "Gamified Habit Tracker",
      description: "A system for tracking and managing habits.",
      details: "Transforms habit building into an engaging game, featuring streak tracking, reward systems, and personalized challenges.",
      technologies: ["ReactJS", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL"],
      category: "Web Apps",
      link: "http://habitquest.free.nf/",
      type: "Personal",
      thumbnail: habitTrackerThumbnail,
    },
    {
      id: 28,
      title: "Dental Appointment Scheduler",
      description: "A system for scheduling dental appointments.",
      details: "A comprehensive system offering seamless dental appointment booking, patient management, and administrative functionalities for dental clinics.",
      technologies: ["ReactJS", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL"],
      category: "Web Apps",
      link: "http://oralease.free.nf/",
      type: "Client",
      thumbnail: dentalSchedulerThumbnail,
    },
    {
      id: 29,
      title: "Library Management System",
      description: "A system for managing library resources and transactions.",
      details: "Provides a user-friendly interface for managing library resources and transactions.",
      technologies: ["ReactJS", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL"],
      category: "Web Apps",
      link: "http://shelfsmart.free.nf/",
      type: "Client",
      thumbnail: libraryManagementThumbnail,
    },
    {
      id: 30,
      title: "Pet Care Management",
      description: "A system for managing pet care and transactions.",
      details: "A comprehensive platform designed for pet owners and caregivers to manage pet profiles, appointments, and health records.",
      technologies: ["ReactJS", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL"],
      category: "Web Apps",
      link: "http://furfriend.free.nf/",
      type: "Client",
      thumbnail: petManagementThumbnail,
    },
    {
      id: 31,
      title: "Chinese Restaurant Website",
      description: "A website for a Chinese restaurant.",
      details: "A online platform designed for Chinese restaurants, featuring online ordering, menu management, and customer reservations.",
      technologies: ["ReactJS", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL"],
      category: "Web Apps",
      link: "http://goldenwok.free.nf/",
      type: "Client",
      thumbnail: chineseRestaurantThumbnail,
    },
    {
      id: 32,
      title: "Environmental Impact Monitor",
      description: "A website for a environmental impact monitor.",
      details: "A dynamic dashboard for monitoring environmental impact, providing real-time data visualization, analytics, and reporting tools.",
      technologies: ["ReactJS", "TypeScript", "FastAPI", "PostgreSQL", "Chart.JS"],
      category: "Dashboards",
      link: "http://carbonvision.free.nf/",
      type: "Client",
      thumbnail: environmentalMonitorThumbnail,
    },
    // Technology tags to be updated //
    {
      id: 33,
      title: "Automated Guest Services Platform",
      description: "A website for a automated guest services platform.",
      details: "An AI-powered platform designed to automate guest interactions and services, leveraging AI-tools to provide intelligent responses.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "MongoDB", "OpenAI API", "LangChain"],
      category: "AI/ML",
      link: "http://guestpal.free.nf/",
      type: "Client",
      thumbnail: automatedGuestServicesThumbnail,
    },
    {
      id: 34,
      title: "Multi-Property Admin Suite",
      description: "A website for a multi-property admin suite.",
      details: "A centralized admin suite for managing multiple properties, offering tools for property management, and tenant relations.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Dashboards",
      link: "http://propertypilot.free.nf/",
      type: "Client",
      thumbnail: multiPropertyAdminSuiteThumbnail,
    },
    {
      id: 35,
      title: "Service Request & Job Ticketing Platform",
      description: "A website for a service request & job ticketing platform.",
      details: "Provides a user-friendly interface for a service request & job ticketing platform.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://fixmate.free.nf/",
      type: "Client",
      thumbnail: serviceRequestPlatformThumbnail,
    },
    {
      id: 36,
      title: "Walk-In Queue & Ticket System",
      description: "A website for a walk-in queue & ticket system.",
      details: "A streamlined system for managing walk-in queues and service tickets, featuring real-time queue updates, and digital ticketing.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://queuetrackr.free.nf/",
      type: "Client",
      thumbnail: walkinQueueTicketSystemThumbnail,
    },
    {
      id: 37,
      title: "Spare Parts Management System",
      description: "A web application for management of spare parts inventory.",
      details: "Provides features for tracking inventory and streamlining service requests and maintenance schedules.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://sparestack.free.nf/",
      type: "Client",
      thumbnail: sparePartsManagementThumbnail,
    },
    {
      id: 38,
      title: "Equipment & Tool Management Tracker",
      description: "A web app for tracking equipment and tools.",
      details: "Provides real-time location tracking, check-in/check-out, inventory audits, and asset oversight.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://assetkit.free.nf/",
      type: "Client",
      thumbnail: equipmentToolManagementThumbnail,
    },
    {
      id: 39,
      title: "Store Inventory Manager",
      description: "A web app for managing retail store inventory.",
      details: "Features real-time stock tracking, barcode scanning, and a user-friendly interface for inventory control.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://stocklite.free.nf/",
      type: "Client",
      thumbnail: storeInventoryManagerThumbnail,
    },
    {
      id: 40,
      title: "Supply Restocking Notification System",
      description: "A system for managing supply and generating alerts.",
      details: "Features real-time inventory tracking, customizable reorder thresholds, and tools for efficient supply chain management.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://restockly.free.nf/",
      type: "Client",
      thumbnail: supplyRestockingNotificationThumbnail,
    },
    {
      id: 41,
      title: "Employee Shift & Attendance Scheduler",
      description: "A web app for shift scheduling and attendance tracking.",
      details: "Provides features for creating and managing work schedules with drag-and-drop simplicity accessible via a user-friendly mobile interface.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://shiftwise.free.nf/",
      type: "Client",
      thumbnail: employeeShiftAttendanceSchedulerThumbnail,
    },
    {
      id: 42,
      title: "Digital Menu + QR Code Generator",
      description: "A web app for digital menus by generating QR codes.",
      details: "Enables restaurants to create customizable digital menus with real-time updates, QR code to enhance dining experience and efficiency.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://menusnap.free.nf/",
      type: "Client",
      thumbnail: digitalMenuQrCodeGeneratorThumbnail,
    },
    {
      id: 43,
      title: "Feedback & Rating Manager",
      description: "A web app for managing feedback and ratings.",
      details: "Enables businesses to gather, analyze, and respond to customer feedback and ratings, providing insights to improve services and products.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://reviewradar.free.nf/",
      type: "Client",
      thumbnail: feedbackRatingManagerThumbnail,
    },
    {
      id: 44,
      title: "Digital Gift Card System",
      description: "A web application for managing digital gift cards.",
      details: "A platform for businesses to create, sell, and manage digital gift cards, fostering customer loyalty, and user-friendly features.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://simplygifted.free.nf/",
      type: "Personal",
      thumbnail: digitalGiftCardSystemThumbnail,
    },
    {
      id: 45,
      title: "Skill Tutoring Platform",
      description: "A platform connecting students with expert tutors.",
      details: "Offers a platform where users can find, book, and engage with skilled tutors and a rating system for quality assurance.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://tutorlink.free.nf/",
      type: "Personal",
    },
    {
      id: 46,
      title: "Handmade Goods E-commerce",
      description: "An e-commerce platform for unique handmade goods.",
      details: "A vibrant online marketplace connecting artisans with buyers and personalized shopping experiences for handmade items.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://craftmarket.free.nf/",
      type: "Personal",
    },
    {
      id: 47,
      title: "Pickup & Delivery Laundry Service",
      description: "A convenient web application for on-demand laundry services.",
      details: "Provides seamless scheduling of laundry pickups and deliveries, real-time order tracking, and secure payment options.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://laundrymate.free.nf/",
      type: "Personal",
    },
    {
      id: 48,
      title: "Pre-order System for Takeout & Meal Prep",
      description: "A specialized system for managing meal prep pre-orders.",
      details: "Facilitates pre-ordering for restaurants and meal prep services, offering customizable menus, scheduled pickups/deliveries.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://mealmatch.free.nf/",
      type: "Personal",
    },
    {
      id: 49,
      title: "Direct Produce Ordering",
      description: "A direct ordering system for fresh produce from local farms.",
      details: "Connects consumers and businesses directly with local farms, offering customizable baskets and subscription options.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://purelypicked.free.nf/",
      type: "Client",
    },
    {
      id: 50,
      title: "Clothing Alteration Status App",
      description: "A mobile-friendly app for tracking clothing alteration orders.",
      details: "Allows customers to check the status of their alteration orders, receive notifications and communicate with the tailor.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://tailormade.free.nf/",
      type: "Client",
    },
    {
      id: 51,
      title: "Community Coffee Shop Loyalty Portal",
      description: "A loyalty program portal for a community coffee shop.",
      details: "Engages customers with a reward-based loyalty system, tracking purchases, offering exclusive deals, and a user-friendly web interface.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://brewlocal.free.nf/",
      type: "Client",
    },
    {
      id: 52,
      title: "Home Renovation & Material Estimator",
      description: "A tool for estimating home renovation costs and materials.",
      details: "Provides users with comprehensive estimates for home renovation projects, including detailed material breakdowns and cost projections.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://buildquote.free.nf/",
      type: "Client",
    },
    {
      id: 53,
      title: "Gadget Repair Tracker",
      description: "Comprehensive tool for tracking and managing gadget repairs.",
      details: "Provides users with a detailed tracking system for gadget repairs, including repair status updates, cost estimates, and service history.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://repairlogix.free.nf/",
      type: "Client",
    },
    {
      id: 54,
      title: "Equipment Booking Platform",
      description: "A platform for booking and managing equipment rentals.",
      details: "Offers a streamlined booking system for equipment rentals, featuring availability checks, reservation management, and user-friendly interface.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://gearrentalHub.free.nf/",
      type: "Client",
    },
    {
      id: 55,
      title: "Booking for Cleaning Services",
      description: "A platform for scheduling cleaning services.",
      details: "Facilitates seamless booking for cleaning services, offering service packages, secure payment options, and real-time appointment tracking.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://broomboom.free.nf/",
      type: "Client",
    },
    {
      id: 56,
      title: "Local Snack Subscription & Delivery",
      description: "A subscription and delivery service for local snacks.",
      details: "Offers a selection of local snacks through a subscription model, providing convenient home delivery and supporting local businesses.",
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://snackcycle.free.nf/",
      type: "Client",
    },
    {
      id: 57,
      title: "Shoe Repair & Customization Booking",
      description: "A booking platform for shoe repair services.",
      details: "Schedule appointments for shoe repair and customization, offering various service options and a gallery for custom designs.",      
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://shoesavvy.free.nf/",
      type: "Client",
    },
    {
      id: 58,
      title: "Water Refill Delivery Tracker",
      description: "A tracking system for water refill deliveries.",
      details: "Provides updates on water refill orders, enabling customers to track their delivery status and subscriptions efficiently.",      
      technologies: ["ReactJS", "TypeScript", "ExpressJS", "ExpressJS", "PostgreSQL"],
      category: "Web Apps",
      link: "http://freshfix.free.nf/",
      type: "Client",
    },
  ];

  const projectsPerPage = 4; // 2x2 grid

  // Get all projects for the selected category
  const allCategoryProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  // Calculate total pages
  const totalPages = Math.ceil(allCategoryProjects.length / projectsPerPage);

  // Get current projects based on pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = allCategoryProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Check if pagination controls should be visible
  const paginationVisible = allCategoryProjects.length > projectsPerPage;

  // Function to go to next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleMouseEnterCategoryButton = (e: React.MouseEvent<HTMLButtonElement>, category: string) => {
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.backgroundColor = 'var(--color-primary)';
  };

  const handleMouseLeaveCategoryButton = (e: React.MouseEvent<HTMLButtonElement>, category: string) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.backgroundColor = selectedCategory === category ? 'var(--color-primary)' : 'var(--color-tag-bg)';
  };

  const handleMouseEnterPaginationButton = (e: React.MouseEvent<HTMLButtonElement>, isNext: boolean) => {
    const shouldAnimate = (isNext && currentPage < totalPages) || (!isNext && currentPage > 1);
    if (shouldAnimate) {
      e.currentTarget.style.transform = 'translateY(-2px)';
    }
  };

  const handleMouseLeavePaginationButton = (e: React.MouseEvent<HTMLButtonElement>, isNext: boolean) => {
    const shouldAnimate = (isNext && currentPage < totalPages) || (!isNext && currentPage > 1);
    if (shouldAnimate) {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-line"></div>
            <h1>Featured Projects</h1>
          <div className="section-line"></div>
        </div>

        <div className="category-toggle">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
              }}
              className={`category-button ${selectedCategory === category ? "active" : ""}`}
              style={{
                padding: 'var(--space-1) var(--space-3)',
                border: 'none',
                borderRadius: '9999px',
                backgroundColor: selectedCategory === category ? 'var(--color-primary)' : 'var(--color-tag-bg)',
                color: selectedCategory === category ? '#fff' : 'var(--color-tag-text)',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                lineHeight: '1.6',
                transition: 'transform var(--transition-medium), background-color var(--transition-medium)',
              }}
              onMouseEnter={(e) => handleMouseEnterCategoryButton(e, category)}
              onMouseLeave={(e) => handleMouseLeaveCategoryButton(e, category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {currentProjects.map((project) => (
            <a
              key={project.id}
              href={project.link || "#"}
              target={project.link ? "_blank" : "_self"}
              rel={project.link ? "noopener noreferrer" : ""}
              className="project-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {project.thumbnail && (
                <div className="project-thumbnail-container">
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    className="project-thumbnail"
                  />
                  <div className="project-thumbnail-fade"></div>
                  {project.type && 
                    <span className="project-type-tag">
                      {project.type}
                    </span>
                  }
                </div>
              )}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-details">{project.details}</p>
                <div className="project-footer">
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="view-link">
                    <span>View</span>
                    <ExternalLink />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {paginationVisible && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', gap: '10px' }}>
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              style={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: 'var(--color-primary)',
                color: '#fff',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                lineHeight: '1.6',
                transition: 'transform var(--transition-medium), background-color var(--transition-medium)',
                opacity: currentPage === 1 ? 0.5 : 1,
                pointerEvents: currentPage === 1 ? 'none' : 'auto',
              }}
              onMouseEnter={(e) => handleMouseEnterPaginationButton(e, false)}
              onMouseLeave={(e) => handleMouseLeavePaginationButton(e, false)}
            >
              <ChevronLeft size={20} />
            </button>
            <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--color-text)' }}>
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              style={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: 'var(--color-primary)',
                color: '#fff',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                lineHeight: '1.6',
                transition: 'transform var(--transition-medium), background-color var(--transition-medium)',
                opacity: currentPage === totalPages ? 0.5 : 1,
                pointerEvents: currentPage === totalPages ? 'none' : 'auto',
              }}
               onMouseEnter={(e) => handleMouseEnterPaginationButton(e, true)}
              onMouseLeave={(e) => handleMouseLeavePaginationButton(e, true)}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
