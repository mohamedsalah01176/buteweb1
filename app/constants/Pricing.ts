import {Pricing} from "../types/interface"

export const PricingSection:Pricing[]=[
    {
        title: "freelancer",
        description: "The essentials to provide your best work for your clients.",
        priceM: 15,
        priceY: 144,
        array: [
          "5 products",
          "Up to 1,000 subscribers",
          "Basic analytics",
          "48-hour support response time",
        ],
        isMostPopular:false
      },
      {
        title: "Startup",
        description: "A plan that scales with your rapidly growing business.",
        priceM: 30,
        priceY: 288,
        array: [
          "25 products",
          "Up to 10,000 subscribers",
          "Advanced analytics",
          "24-hour support response time",
          "Marketing automations",
        ],
        isMostPopular: true,
      },
      {
        title: "enterprise",
        description: "Dedicated support and infrastructure for your company.",
        priceM: 48,
        priceY: 576,
        array: [
          "Unlimited products",
          "Unlimited subscribers",
          "Advanced analytics",
          "1-hour, dedicated support response time",
          "Marketing automations",
          "Custom reporting tools",
        ],
        isMostPopular: false,
      },
]