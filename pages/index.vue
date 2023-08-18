<template>
  <div>
    <div class="hero min-h-screen" style="background-image: url(bg.jpg)">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">
            <span class="drop-shadow-xl">Fast Fashion </span> <br />
            <span class="text-2xl opacity-75">
              Rethinking Trends, Reducing Waste
            </span>
          </h1>
          <p class="mb-5">
            Welcome to Fast Fashion, where we delve into the world of trendy
            clothing that's leaving a lasting mark on our environment. Join us
            as we uncover the hidden costs of rapid fashion cycles and champion
            a future of sustainable style.
          </p>
          <button
            class="btn btn-primary"
            id="explore-btn"
            @click="scrollWindow"
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>

    <!-- Clickable card section -->
    <div class="section bg-[#112720] py-16 relative">
      <span
        class="h-[70%] w-[100%] z-50 tooltip absolute tooltip-bottom tooltip-accent text-gray-400 cursor-pointer top-10"
        data-tip="Click Me to View More"
        onclick="fast_textile.showModal()"
      ></span>
      <div class="container mx-auto">
        <div class="card cursor-pointer" onclick="fast_textile.showModal()">
          <div class="p-6">
            <h2 class="text-3xl font-semibold mb-6">
              What Exactly is Fast Fashion?
            </h2>
            <p class="text-neutral-400 mb-3">
              Fast fashion refers to the rapid production and consumption of
              trendy and affordable clothing, designed to quickly match the
              latest fashion trends. Typically, fast fashion items are produced
              using cheap labor and materials, resulting in low-cost garments
              that are often discarded after only a few wears. This cycle of
              fast-changing trends has given rise to significant environmental
              and societal challenges, with textile waste being a prominent
              issue.
            </p>
          </div>
        </div>
      </div>
    </div>

    <dialog id="fast_textile" class="modal bg-transparent">
      <form method="dialog" class="modal-box bg-transparent w-11/12 max-w-5xl">
        <button
          class="btn btn-sm btn-circle btn-ghost absolute right-9 top-9 z-50"
        >
          ✕
        </button>

        <div class="mockup-window border bg-base-300">
          <div class="px-4 py-16 bg-base-200">
            <p class="text-neutral-400 mb-3">
              Fast fashion refers to the rapid production and consumption of
              trendy and affordable clothing, designed to quickly match the
              latest fashion trends. Typically, fast fashion items are produced
              using cheap labor and materials, resulting in low-cost garments
              that are often discarded after only a few wears. This cycle of
              fast-changing trends has given rise to significant environmental
              and societal challenges, with textile waste being a prominent
              issue.
            </p>
            <p class="text-neutral-400 mb-3">
              Textile waste includes discarded clothing, textile materials, and
              fabrics. Fast fashion contributes to this waste problem due to its
              reliance on short-lived trends, causing items to fall out of
              fashion quickly. The fashion industry plays a significant role in
              global environmental issues, such as resource depletion,
              greenhouse gas emissions, and water pollution. The dyeing and
              finishing of textiles can release harmful chemicals into rivers,
              impacting aquatic ecosystems and human health.
            </p>
            <p class="text-neutral-400 mb-3">
              Fast fashion's rapid production cycles drive up the demand for raw
              materials like water, electricity, and fibers, accelerating
              resource depletion. Synthetic fabrics like polyester, produced
              using energy-intensive technologies and petrochemicals, further
              strain limited resources. According to the Ellen MacArthur
              Foundation, the fashion sector generated a staggering 92 million
              tons of textile waste in 2015 alone. Additionally, the US
              Environmental Protection Agency estimates that only 15.2% of the
              17.5 million tons of textiles produced in 2018 were recycled.
              Shockingly, the European Union reports that the fashion industry
              contributes more to global carbon emissions—10%—than both
              international travel and maritime shipping combined.
            </p>
          </div>
        </div>
      </form>
    </dialog>

    <!-- Environmental Impact of Fast Fashion -->
    <div class="section bg-[#0F3631] py-16">
      <div class="container mx-auto">
        <h2 class="text-3xl font-semibold mb-6 text-neutral-200">
          Environmental Impact of Fast Fashion
        </h2>
        <div
          class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <!-- Water Usage Card -->
          <div
            class="flex flex-col lg:flex-row mb-4 card w-full bg-base-100 shadow-xl image-full"
          >
            <figure>
              <img src="/cards/water.jpg" alt="Water Pollution" />
            </figure>

            <div
              class="grid flex-grow h-full rounded-box place-items-center card-body"
            >
              <div class="card-title">Water Usage</div>
              <p>
                Fast fashion's high water usage for dyeing, washing, and
                processing textiles contributes to water scarcity and pollution.
              </p>
              <div class="card-actions justify-end">
                <button
                  class="btn btn-primary btn-sm btn-outline mt-2"
                  onclick="water.showModal()"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <!-- Greenhouse Gas Emissions Card -->
          <div
            class="flex flex-col lg:flex-row mb-4 card w-full bg-base-100 shadow-xl image-full"
          >
            <figure>
              <img src="/cards/factory.jpg" alt="GreenHouse Gas Emissions" />
            </figure>
            <div
              class="grid flex-grow h-full rounded-box place-items-center card-body"
            >
              <div class="card-title">Greenhouse Gas Emissions</div>
              <p>
                The production, transportation, and disposal of fast fashion
                items contribute to greenhouse gas emissions, contributing to
                climate change.
              </p>
              <div class="card-actions justify-end">
                <button
                  class="btn btn-primary btn-sm btn-outline mt-2"
                  onclick="factory.showModal()"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <!-- Waste Generation Card -->
          <div
            class="flex flex-col lg:flex-row mb-4 card w-full bg-base-100 shadow-xl image-full"
          >
            <figure>
              <img src="/cards/waste.jpg" alt="Waste Generation" />
            </figure>
            <div
              class="grid flex-grow h-full rounded-box place-items-center card-body"
            >
              <div class="card-title">Waste Generation</div>
              <p>
                Fast fashion's low-quality garments often have a short lifespan
                and end up in landfills, contributing to the textile waste
                problem.
              </p>
              <div class="card-actions justify-end">
                <button
                  class="btn btn-primary btn-sm btn-outline mt-2"
                  onclick="waste.showModal()"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <!-- Chemical Usage Card -->
          <div
            class="flex flex-col lg:flex-row mb-4 card w-full bg-base-100 shadow-xl image-full"
          >
            <figure>
              <img src="/cards/chemical.jpg" alt="Toxic Chemical Usage" />
            </figure>
            <div
              class="grid flex-grow h-full rounded-box place-items-center card-body"
            >
              <div class="card-title">Chemical Usage</div>
              <p>
                The production of textiles involves the use of various
                chemicals, including pesticides, dyes, and finishing agents,
                which can harm ecosystems and human health.
              </p>
              <div class="card-actions justify-end">
                <button
                  class="btn btn-primary btn-sm btn-outline mt-2"
                  onclick="chemical.showModal()"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <!-- Deforestation Card -->
          <div
            class="flex flex-col lg:flex-row mb-4 card w-full bg-base-100 shadow-xl image-full"
          >
            <figure>
              <img src="/cards/deforest.jpg" alt="Deforestation" />
            </figure>
            <div
              class="grid flex-grow h-full rounded-box place-items-center card-body"
            >
              <div class="card-title">Deforestation</div>
              <p>
                The demand for raw materials like cotton can contribute to
                deforestation if not sustainably managed.
              </p>
              <div class="card-actions justify-end">
                <button
                  class="btn btn-primary btn-sm btn-outline mt-2"
                  onclick="deforest.showModal()"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <!-- Microplastic Card -->
          <div
            class="flex flex-col lg:flex-row mb-4 card w-full bg-base-100 shadow-xl image-full"
          >
            <figure>
              <img src="/cards/microplastic.jpg" alt="Microplastic" />
            </figure>
            <div
              class="grid flex-grow h-full rounded-box place-items-center card-body"
            >
              <div class="card-title">Microplastics</div>
              <p>
                Synthetic fibers used in fast fashion shed microplastics into
                water bodies during washing, impacting aquatic life and
                potentially entering the food chain.
              </p>
              <div class="card-actions justify-end">
                <button
                  class="btn btn-primary btn-sm btn-outline mt-2"
                  onclick="microplastic.showModal()"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <dialog
      v-for="modal in impactModalsList"
      :id="modal.id"
      class="modal bg-transparent"
      :key="modal.id"
    >
      <form method="dialog" class="modal-box bg-transparent w-11/12 max-w-5xl">
        <button
          class="btn btn-sm btn-circle btn-ghost absolute right-9 top-9 z-50"
        >
          ✕
        </button>

        <div class="mockup-window border bg-slate-700">
          <h2 class="px-[2rem] mb-5 text-3xl drop-shadow-2xl underline">
            {{ modal.title }}
          </h2>
          <div
            class="px-4 py-5 ml-5 mr-5 hover:bg-slate-600 rounded-lg duration-200 ease-in-out cursor-default"
          >
            {{ modal.content }}
          </div>
          <figure class="px-10 flex justify-center pt-5 pb-5">
            <img
              :src="`/cards/${modal.id}.jpg`"
              alt="Impact Image"
              class="rounded-xl w-6/12"
            />
          </figure>
        </div>
      </form>
    </dialog>

    <!-- Explore Sustainable Fashion Section -->
    <div class="section py-16 bg-neutral h-[100vh]">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-6">Explore Sustainable Fashion</h2>
        <div class="tabs space-x-4">
          <div
            v-for="(tab, index) in tabs"
            :key="index"
            class="tab tab-bordered"
            :class="{ 'tab-active': activeTab === tab.id }"
            @click="changeTab(tab.id)"
          >
            {{ tab.title }}
          </div>
        </div>
        <div class="tab-content mt-8">
          <!-- Content of the active tab will be displayed here -->
          <div
            v-if="activeTab === 'environmental'"
            class="min-h-[40hv] bg-base-200"
          >
            <div class="hero-content flex-col lg:flex-row">
              <img
                src="waste.jpg"
                class="max-w-sm rounded-lg shadow-2xl"
                alt="Environmental Impact"
              />
              <div class="p-4 lg:p-8">
                <p class="py-6 text-gray-400">
                  The fast fashion industry generates massive amounts of textile
                  waste, contributing to pollution and resource depletion.
                  According to estimates from the Ellen MacArthur Foundation,
                  the fashion sector generated 92 million tons of textile waste
                  in 2015 alone. Fast fashion's short production cycles lead to
                  increased demand for raw materials like water and electricity,
                  accelerating resource depletion. The dyeing and finishing of
                  textiles also release harmful chemicals into water bodies,
                  affecting aquatic ecosystems and human health.
                </p>
                <button class="btn btn-primary btn-outline">Learn More</button>
              </div>
            </div>
          </div>

          <div v-if="activeTab === 'ethical'" class="min-h-[40hv] bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
              <img
                src="brands.png"
                class="max-w-sm rounded-lg shadow-2xl"
                alt="Ethical Brands"
              />
              <div class="p-4 lg:p-8">
                <p class="py-6 text-gray-400">
                  Discover a new generation of ethical fashion brands committed
                  to sustainability and social responsibility. Brands like XYZ
                  Fashion prioritize eco-friendly materials, fair labor
                  practices, and transparent supply chains. These brands aim to
                  make a positive impact on both the planet and the people
                  involved in the production process. By supporting ethical
                  brands, you contribute to a more sustainable fashion industry
                  and a brighter future.
                </p>
                <button class="btn btn-primary btn-outline">
                  Explore Brands
                </button>
              </div>
            </div>
          </div>

          <div v-if="activeTab === 'tips'" class="min-h-[40hv] bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
              <img
                src="fashion-tips.jpg"
                class="max-w-sm rounded-lg shadow-2xl"
                alt="Sustainable Fashion Tips"
              />
              <div class="p-4 lg:p-8">
                <p class="py-6 text-gray-400">
                  Embrace sustainable fashion choices in your daily life to
                  reduce your environmental footprint. Shop secondhand or from
                  thrift stores to give pre-loved clothing a new life and save
                  resources. Choose natural and organic fabrics like organic
                  cotton and Tencel to support sustainable materials. Extend the
                  lifespan of your clothes by following proper care instructions
                  and repairing items when needed. Educate yourself about
                  sustainable fashion practices to make informed decisions and
                  inspire others.
                </p>
                <button class="btn btn-primary btn-outline">Get Tips</button>
              </div>
            </div>
          </div>

          <div v-if="activeTab === 'news'" class="min-h-[40hv] bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
              <img
                src="news.png"
                class="max-w-sm rounded-lg shadow-2xl"
                alt="Sustainable Fashion News"
              />
              <div class="p-4 lg:p-8">
                <p class="py-6 text-gray-400">
                  Stay updated with the latest news and trends in the world of
                  sustainable fashion. Discover new brands that are making waves
                  with their eco-conscious designs and innovative solutions.
                  Learn about upcoming sustainable fashion events, workshops,
                  and initiatives to get involved in the movement. Stay
                  connected with like-minded individuals who share your passion
                  for creating a positive impact through fashion.
                </p>
                <button class="btn btn-primary btn-outline">Read News</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pledge Section -->
    <section class="bg-[#112720] py-16 h-[75vh]">
      <div class="container mx-auto">
        <h2 class="text-3xl font-semibold mb-6 text-neutral-200">
          Make a Pledge to Reduce Textile Waste
        </h2>
        <div
          class="grid grid-cols-1 gap-32 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <!-- Pledge Option 1: Minimal Impact -->
          <div
            class="card w-96 bg-base-100 shadow-xl image-full cursor-pointer hover:transform-cpu hover:scale-[1.04] duration-300"
            @click="selectedPledge = 'minimal'"
            :class="getMenuItemClass('minimal')"
          >
            <figure>
              <img src="/pledge/minimal.jpg" alt="Minimal Impact" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Minimal Impact</h2>
              <p>
                Commit to buying fewer fast fashion items and opting for
                sustainable alternatives.
              </p>
            </div>
          </div>

          <!-- Pledge Option 2: Sustainable Choices -->
          <div
            class="card w-96 bg-base-100 shadow-xl image-full cursor-pointer hover:transform-cpu hover:scale-[1.04] duration-300"
            @click="selectedPledge = 'sustainable'"
            :class="getMenuItemClass('sustainable')"
          >
            <figure>
              <img src="/pledge/sustainable.jpg" alt="Sustainable Choices" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Sustainable Choices</h2>
              <p>
                Opt for quality over quantity, support ethical brands, and
                prioritize clothing repair and upcycling.
              </p>
            </div>
          </div>

          <!-- Pledge Option 3: Zero Waste Hero -->
          <div
            class="card w-96 bg-base-100 shadow-xl image-full cursor-pointer hover:transform-cpu hover:scale-[1.04] duration-300"
            @click="selectedPledge = 'zero-waste'"
            :class="getMenuItemClass('zero-waste')"
          >
            <figure>
              <img src="/pledge/hero.jpg" alt="Zero Waste Hero" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Zero Waste Hero</h2>
              <p>
                Commit to reducing textile waste to zero by repurposing,
                donating, and composting clothing.
              </p>
            </div>
          </div>
        </div>

        <!-- Pledge Form -->
        <div v-if="selectedPledge" class="mt-8">
          <h3 class="text-xl font-semibold mb-2 text-neutral-300">
            I pledge to:
            {{
              getPledgeDescription(
                selectedPledge == 'minimal'
                  ? 'minimal'
                  : selectedPledge == 'sustainable'
                  ? 'sustainable'
                  : 'zero-waste'
              ).name
            }}
          </h3>
          <p class="text-neutral-400">
            {{
              getPledgeDescription(
                selectedPledge == 'minimal'
                  ? 'minimal'
                  : selectedPledge == 'sustainable'
                  ? 'sustainable'
                  : 'zero-waste'
              ).desc
            }}
          </p>
          <div class="mt-4">
            <button @click="submitPledge" class="btn btn-primary">
              Submit Pledge
            </button>
          </div>
        </div>
      </div>
    </section>

    <div v-if="sumbitPledgeFlag" class="toast toast-start z-[100] shadow-xl">
      <div class="alert alert-success">
        <span
          >☑ Submitted Pledge to
          {{
            getPledgeDescription(
              selectedPledge == 'minimal'
                ? 'minimal'
                : selectedPledge == 'sustainable'
                ? 'sustainable'
                : 'zero-waste'
            ).name
          }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'
import Icon from 'nuxt-icon'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      activeTab: 'environmental', // Set the default active tab
      tabStyle: 'tab',
      isModalOpen: false,
      tabs: [
        { id: 'environmental', title: 'Environmental Impact' },
        { id: 'ethical', title: 'Ethical Brands' },
        { id: 'tips', title: 'Sustainable Fashion Tips' },
        { id: 'news', title: 'Sustainable Fashion News' },
      ],

      impactModalId: '',
      impactModalsList: [
        {
          id: 'water',
          title: 'Water Usage',
          content:
            "Fast fashion's high water usage for dyeing, washing, and processing textiles contributes to water scarcity and pollution. " +
            'The excessive water consumption in the production of clothing strains local water resources and ecosystems, leading to environmental degradation. ' +
            'Traditional dyeing methods release chemicals and pollutants into water bodies, contaminating aquatic environments and posing risks to aquatic life and human health. ' +
            'Sustainable water management practices and innovative dyeing techniques are crucial for reducing the negative impact of water usage in the fast fashion industry.',
        },
        {
          id: 'factory',
          title: 'Greenhouse Gas Emissions',
          content:
            'The production, transportation, and disposal of fast fashion items contribute to greenhouse gas emissions, which significantly contribute to climate change. ' +
            "The fashion industry's carbon footprint is substantial due to energy-intensive manufacturing processes, long supply chains, and excessive waste generation. " +
            'To address this impact, sustainable practices such as using renewable energy sources, optimizing transportation routes, and reducing overproduction are crucial. ' +
            "Consumers' choices to support eco-friendly and circular fashion initiatives also play a vital role in mitigating greenhouse gas emissions.",
        },
        {
          id: 'waste',
          title: 'Waste Generation',
          content:
            "Fast fashion's disposable nature leads to the production of low-quality garments that have short lifespans. " +
            'This results in a significant amount of textile waste that ends up in landfills, contributing to environmental degradation and resource depletion. ' +
            'Adopting sustainable practices such as designing for durability, encouraging clothing repair, and promoting circular economy models can help mitigate the waste generation associated with fast fashion. ' +
            'Consumers can also make mindful choices by supporting brands that prioritize quality and longevity.',
        },
        {
          id: 'chemical',
          title: 'Chemical Usage',
          content:
            'The production of textiles involves the use of various chemicals, including pesticides, dyes, and finishing agents, which can harm ecosystems and human health. ' +
            'Chemicals used in textile production can leach into the environment, contaminating soil, water bodies, and the air. ' +
            'Adopting eco-friendly and non-toxic dyeing methods, as well as supporting brands that prioritize sustainable and safe chemical practices, can help minimize the negative impact of chemical usage in the fashion industry.',
        },
        {
          id: 'deforest',
          title: 'Deforestation',
          content:
            'The demand for raw materials like cotton can contribute to deforestation if not sustainably managed. ' +
            'Deforestation disrupts ecosystems, leads to loss of biodiversity, and releases carbon stored in trees into the atmosphere, contributing to climate change. ' +
            'Supporting sustainable practices such as using certified organic materials, promoting agroforestry, and adopting responsible sourcing methods can help mitigate the impact of deforestation in the fast fashion supply chain.',
        },
        {
          id: 'microplastic',
          title: 'Microplastics',
          content:
            'Synthetic fibers used in fast fashion shed microplastics into water bodies during washing, impacting aquatic life and potentially entering the food chain. ' +
            'Microplastics, small plastic particles less than 5mm in size, can accumulate in oceans and pose risks to marine ecosystems and human health. ' +
            'Adopting sustainable fabrics and reducing the use of synthetic materials can help address the issue of microplastic pollution in the fashion industry. ' +
            'Additionally, investing in advanced wastewater treatment technologies can help capture microplastics before they reach water bodies.',
        },
      ],
      selectedPledge: '', // Stores the selected pledge option
      sumbitPledgeFlag: false, // Flag to show the pledge form
    }
  },
  methods: {
    scrollWindow() {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    },
    changeTab(tabId: string) {
      this.activeTab = tabId
    },
    openModal(tab: string = '') {
      this.impactModalId = tab
      this.isModalOpen = true
    },
    closeModal(tab: string = '') {
      this.impactModalId = tab
      this.isModalOpen = false
    },
    getMenuItemClass(pledge: any) {
      return {
        'menu-item-selected': this.selectedPledge == pledge,
      }
    },
    // Method to get pledge description based on selected pledge
    getPledgeDescription(pledge: 'minimal' | 'sustainable' | 'zero-waste') {
      // You can replace this with descriptions for each pledge option
      const descriptions = {
        minimal: {
          name: 'Minimalist',
          desc: 'Commit to buying fewer fast fashion items and opting for sustainable alternatives.',
        },
        sustainable: {
          name: 'Futurist',
          desc: 'Opt for quality over quantity, support ethical brands, and prioritize clothing repair and upcycling.',
        },
        'zero-waste': {
          name: 'Zero Waste Hero',
          desc: 'Commit to reducing textile waste to zero by repurposing, donating, and composting clothing.',
        },
      }
      return descriptions[pledge] || 'a'
    },

    // Method to submit user's pledge
    submitPledge() {
      // Perform actions to submit user's pledge
      // For example, you can send the pledge data to a server
      this.sumbitPledgeFlag = true
      console.log('Pledge submitted:', this.selectedPledge)

      setTimeout(() => {
        this.sumbitPledgeFlag = false
      }, 5000)
    },
  },
  computed: {
    heroBackgroundStyle() {
      // Return the background image style for the Hero section
      return {
        backgroundImage: "url('bg.jpg')",
      }
    },
  },
  components: {
    Navbar,
  },
})
</script>
