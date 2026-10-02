import { Product, Review } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "pipes",
    name: "MS & GI PIPES",
    description: "High-quality Mild Steel and Galvanized Iron pipes available in various sizes and thicknesses for all piping needs.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB25dSdmXGqJ3HEZUbuQ73EKWrhTIty_P3Cs2nyxPRfPOGTTzDFKyGwCM9t_nm4lsdskC8A86npFAszB0_rli7oBl_9Yu8IS6GlEwqZZUfWzWe6zcGk2J_R7HyFGNKem6KnL_uWcE2NdNGd7NoFAzZ6qWdd4JsBaOBAk_J_OcyopeNSgGgs48k6mE4i57qRGeeOg5trZRQH8BKeLa_JmySQVI7aT1eVTnc7G7Siw44EeRdsys2d-kPR9A2IjvXnqXXpziNpnQI2rcCR",
    specs: "Grade: IS 1239 / IS 3589, Sizes: 15mm to 300mm NB",
    category: "Pipes & Tubes"
  },
  {
    id: "tubes",
    name: "SQUARE & RECTANGULAR TUBES",
    description: "Precision hollow sections ideal for fabrication frameworks, railings, gates, and structural supports.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCVTb3lDL42OMeNdqtIJ_oOrkFYz1T0UB1HyT_GITEqrBycTovoGeVwowA84x3nGctCCyYlXEZYywHhPZAICIVNTOmy2-Ju5lDl5QEYIYKGeC-TAoWB1iZ75e4mQYM53idh-t6KKE1ykm-fKErhyzH6f0-pq97BD-v2dz9LdYdxHbrwTyAFtVnsSrcj--yL-z1XfGZTSr6egwvGyQKQq7Xe4Fds0U9AuMzVDN34j8lVyEI2US5rmWhyLtO9haHUamLLnIYTmaNp2-o",
    specs: "Grade: IS 4923, Sizes: 20x20mm to 200x200mm",
    category: "Pipes & Tubes"
  },
  {
    id: "angles",
    name: "ANGLES & CHANNELS",
    description: "Durable structural components used in building frameworks and heavy-duty construction applications.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJQqA99BoYilRiJtFt9W4i4Iht91bYQ49w67IXvlwhkw_FRV2fbBXHNrsRCdVJmjtQrMdaQMCz3hBpYDUtcQGG0OCjjCWooleOY2bSaw_RUCUCu3j7hxiVd-u8sneYHN2DIG7KckRDbGAgDEjErLrw4dyyFEpRT8vCEWQXw9x5coR-fwB907g_wUjFs4yIR9CMmRgtuIYiWJhLsWGLE4Fmpsg93iGf03xptBSejSh51jHr-Tpqde4tut1Twv7mi1rCXoEEHsjidY64",
    specs: "Grade: IS 2062 E250/E350, Width: 25mm to 200mm",
    category: "Structural Steel"
  },
  {
    id: "beams",
    name: "BEAMS & JOISTS",
    description: "Strong load-bearing steel sections for structural applications in construction and infrastructure projects.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNz3BC8jNtcnUg9BFMrHlDbXgOBSqvvdrO3pniugm-YWHZ5s--K-3K_pzbpXW0igICtjRLPmQl0BtlaJSjZJttcLBpWC23lThLemFGFyojYPlr4p_CUX3czu9WN-ZUZTb9IVegbR95TgdlO_HQmgGKufIM1zeibVauNeIJCdUE8K5SEY7dEtSq4Gq8u6vEx80o4YMRQHshn444o3LF-jDJnvf-sHJtC-NN0eQ6jwp9V2noSrZDod9PyqicZE_YPxGBLvJxbqe9mrgT",
    specs: "Grade: IS 2062, Size (ISMB/NPB): 100mm to 600mm",
    category: "Structural Steel"
  },
  {
    id: "sheets",
    name: "STEEL SHEETS & PLATES",
    description: "Available in multiple grades and thicknesses for fabrication, machinery, and industrial usage.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaPnCQhZ8gHa5BiigYSNxlXFxYeaYpOU83bOlEWObQs-UwuSkwpWhLuCszo7stMxxcwAS5PjWB3D2j4jC-13pi4M6DKbUeqvG-blI57JN_GsXveo6bfxom7ISTvlj7x82IdFnzVWXUigMFNc3WuBPRK37QPW0kLaCRh2CbszWct0zSWLZ1E32mK4CNcTaQ-Q28oXtJW2kWmfUUe4dxomhXsyVKoY-jRE1hvXaKEX6oqTB8MmCphH93jahidNm4d25svKVXh2V9mLeL",
    specs: "Grade: HR, CR, Galvanized, Thickness: 1mm to 100mm",
    category: "Sheets"
  },
  {
    id: "structural",
    name: "STRUCTURAL STEEL MATERIALS",
    description: "Comprehensive solutions for various structural and fabrication requirements across industries.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCImjud5LZ4ZzCLFO8Kcpoxyi_Xxh_0NkLAkDM-h0pW7SqxhqVOiCu5725BcJbyM-niXl-PdK3RZ4_1cPueIjhWz6l0FEZ-4oRxlqWf8SaAWaTEAEStmqORdz1rhHksrlTDqpbnxv8WZD5Ug9UIro8nXxUeLj8zYzwh4QnzuY0E3ibJwMHJ3aMU6iMGbw3LryzNa5K1ARgAh67yIJNvcOHBEYofKJZ4-dFeLCsMBrN0TTGsM8yn24xJdLLasaerr6bzKoXfx20UfgF",
    specs: "Compliance: IS 2062 / Custom fabrication and sizing",
    category: "Structural Steel"
  },
  {
    id: "tmt",
    name: "TMT REINFORCEMENT BARS",
    description: "High-strength, shock-proof, corrosion-resistant Thermo-Mechanically Treated bars ideal for modern heavy foundations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB90s-GWPhLRn6c-hZoAHJ7CFVHyiPobBtFmsfmjZK-fTiiOwq28ZpSQ8vojt_5kDZDU_LEnTva4-U1mYagqmd6jC5PIzj-XfVXFGDZILn5DHS0WycFx5QSykZ7kHXk7ByP1Bwpmbs3PfrnIWcZbaWzXqQXGVGJCQrgAFr8e108cu0xyGh5Qxd220Tx5BtryIfI4kTO7dMx6syk523GE64LpNkUEXZe5nkpXNDy2thL_L7tjv-0e3b-sn-8mtWTMtv1LjMzzSGktfjj",
    specs: "Sizes: 8mm to 40mm, Grades: Fe 500D, Fe 550D",
    category: "TMT Bars"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev1",
    author: "Khyati Amin",
    rating: 5,
    text: "All Fabrication Materials & TMT Bars are available here. Reliable and trustworthy.",
    role: "Verified Client",
    meta: "6 reviews · 1 photo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWSuh0A_oG3SZnQ61UnUw59Ze0t2ea_yfJ_-eC6e8z57O0Ih4sABCwoV9fp6yxXYtIX-5VwjmwSCdrVOdHVx7Lnm1JB6BsXNq_yTC00TzeTPbblt09E6KpHT_sVyVsMjnYsrRoRnZg3SB31qUa0cu8yo2NzaTNbEfQ48E8q28_-hPDf26SI1_Q2AwJG4dzYmfUnF8sa-o4dzWfaj20kc35DGd_aRXagloRfAi_c_VevUpfhHbEhOJl1xZCj0Y_6ceS6shswhvfYmRl"
  },
  {
    id: "rev2",
    author: "Parth Patel",
    rating: 5,
    text: "Best places for business.....steel and profile best in price",
    role: "Business Partner",
    meta: "Local Guide · 17 reviews",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWSuh0A_oG3SZnQ61UnUw59Ze0t2ea_yfJ_-eC6e8z57O0Ih4sABCwoV9fp6yxXYtIX-5VwjmwSCdrVOdHVx7Lnm1JB6BsXNq_yTC00TzeTPbblt09E6KpHT_sVyVsMjnYsrRoRnZg3SB31qUa0cu8yo2NzaTNbEfQ48E8q28_-hPDf26SI1_Q2AwJG4dzYmfUnF8sa-o4dzWfaj20kc35DGd_aRXagloRfAi_c_VevUpfhHbEhOJl1xZCj0Y_6ceS6shswhvfYmRl"
  },
  {
    id: "rev3",
    author: "JAIMIT PATEL",
    rating: 5,
    text: "Best rates for everything. Very responsive. Highly recommended.",
    role: "Premium Vendor",
    meta: "Local Guide · 37 reviews",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWSuh0A_oG3SZnQ61UnUw59Ze0t2ea_yfJ_-eC6e8z57O0Ih4sABCwoV9fp6yxXYtIX-5VwjmwSCdrVOdHVx7Lnm1JB6BsXNq_yTC00TzeTPbblt09E6KpHT_sVyVsMjnYsrRoRnZg3SB31qUa0cu8yo2NzaTNbEfQ48E8q28_-hPDf26SI1_Q2AwJG4dzYmfUnF8sa-o4dzWfaj20kc35DGd_aRXagloRfAi_c_VevUpfhHbEhOJl1xZCj0Y_6ceS6shswhvfYmRl"
  },
  {
    id: "rev4",
    author: "ujas amin",
    rating: 5,
    text: "excellent product with very reasonable price",
    role: "Verified Customer",
    meta: "12+ industrial reviews",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWSuh0A_oG3SZnQ61UnUw59Ze0t2ea_yfJ_-eC6e8z57O0Ih4sABCwoV9fp6yxXYtIX-5VwjmwSCdrVOdHVx7Lnm1JB6BsXNq_yTC00TzeTPbblt09E6KpHT_sVyVsMjnYsrRoRnZg3SB31qUa0cu8yo2NzaTNbEfQ48E8q28_-hPDf26SI1_Q2AwJG4dzYmfUnF8sa-o4dzWfaj20kc35DGd_aRXagloRfAi_c_VevUpfhHbEhOJl1xZCj0Y_6ceS6shswhvfYmRl"
  },
  {
    id: "rev5",
    author: "mitesh patel",
    rating: 5,
    text: "Very Responsive And Highly Recommended For Good Service",
    role: "Verified Customer",
    meta: "Active partner feedback",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWSuh0A_oG3SZnQ61UnUw59Ze0t2ea_yfJ_-eC6e8z57O0Ih4sABCwoV9fp6yxXYtIX-5VwjmwSCdrVOdHVx7Lnm1JB6BsXNq_yTC00TzeTPbblt09E6KpHT_sVyVsMjnYsrRoRnZg3SB31qUa0cu8yo2NzaTNbEfQ48E8q28_-hPDf26SI1_Q2AwJG4dzYmfUnF8sa-o4dzWfaj20kc35DGd_aRXagloRfAi_c_VevUpfhHbEhOJl1xZCj0Y_6ceS6shswhvfYmRl"
  },
  {
    id: "rev6",
    author: "Kiran Chudasama",
    rating: 5,
    text: "Best Quality Best Rate...",
    role: "Verified Customer",
    meta: "Quality audit review",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWSuh0A_oG3SZnQ61UnUw59Ze0t2ea_yfJ_-eC6e8z57O0Ih4sABCwoV9fp6yxXYtIX-5VwjmwSCdrVOdHVx7Lnm1JB6BsXNq_yTC00TzeTPbblt09E6KpHT_sVyVsMjnYsrRoRnZg3SB31qUa0cu8yo2NzaTNbEfQ48E8q28_-hPDf26SI1_Q2AwJG4dzYmfUnF8sa-o4dzWfaj20kc35DGd_aRXagloRfAi_c_VevUpfhHbEhOJl1xZCj0Y_6ceS6shswhvfYmRl"
  },
  {
    id: "rev7",
    author: "Jasani Bibhas",
    rating: 5,
    text: "Nice and excellent work and partner nature good",
    role: "Verified Customer",
    meta: "Project collaboration",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWSuh0A_oG3SZnQ61UnUw59Ze0t2ea_yfJ_-eC6e8z57O0Ih4sABCwoV9fp6yxXYtIX-5VwjmwSCdrVOdHVx7Lnm1JB6BsXNq_yTC00TzeTPbblt09E6KpHT_sVyVsMjnYsrRoRnZg3SB31qUa0cu8yo2NzaTNbEfQ48E8q28_-hPDf26SI1_Q2AwJG4dzYmfUnF8sa-o4dzWfaj20kc35DGd_aRXagloRfAi_c_VevUpfhHbEhOJl1xZCj0Y_6ceS6shswhvfYmRl"
  }
];
