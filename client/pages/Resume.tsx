import { Link } from "react-router-dom";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { useViewMode } from "@/context/ViewModeContext";

export default function Resume() {
  const { viewMode } = useViewMode();

  return (
    <div className="min-h-screen bg-[#111117] text-white">
      <Header />
      <PageHeader title="Resume" />

      {/* Mobile Layout */}
      <main className={`px-4 pb-16 ${viewMode === "mobile" ? "block" : viewMode === "desktop" ? "hidden" : "md:hidden"}`}>
        {/* Mobile Hero - Resume Card */}
        <Link to="/" className="block mb-0 rounded-2xl overflow-hidden shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] relative z-10">
          <img
            src="images/o resume 1.png"
            alt="Resume"
            className="w-full h-48 object-cover"
          />
          <div className="bg-[#1E1E1E] p-3">
            <h2 className="text-[#E0E0E0] font-bakbak text-lg text-center">Resume</h2>
          </div>
        </Link>

        {/* Mobile Resume Content */}
        <div className="bg-white rounded-2xl p-4 pt-10 -mt-6 shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)]">
          <div className="text-black font-aleo space-y-4 text-pretty">
            <section>
              <h2 className="text-lg font-bold mb-2">EDUCATION</h2>
              <p className="text-sm mb-1">
                <strong>UNIVERSITY OF IOWA</strong> August 2021 - May 2025 Iowa City, IA.
              </p>
              <p className="text-sm mb-1">
                Tippie College of Business – Bachelor of Business Administration in Marketing
              </p>
              <p className="text-sm">
                College of Liberal Arts and Sciences – Bachelor of Arts in Cinema / Video Production
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-2">WORK EXPERIENCE</h2>

              <div className="mb-3">
                <p className="text-sm font-bold">
                  University of Iowa Health Care
                </p>
                <p className="text-xs text-gray-600 mb-1">February 2024 - August 2025, Iowa City, IA</p>
                <p className="text-sm mb-1">Role: Digital Media Specialist | Audio-Visual Associate</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>
                    Directed and produced thousands of custom videos, photos, and graphics to help clients design and
                    manage their digital marketing projects
                  </li>
                  <li>
                    Built a digital asset management system from the ground up to catalog five years' worth of video
                  </li>
                  <li>
                    Designed media projects with cross-functional teams for specific audiences
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <p className="text-sm font-bold">
                  VALR Production
                </p>
                <p className="text-xs text-gray-600 mb-1">June 2022 - April 2023, Iowa City, IA</p>
                <p className="text-sm mb-1">Role: Content Consultant</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>
                    Educated and assisted in the video production of 3 films
                  </li>
                  <li>
                    Established the group's branding, including creating a dedicated logo and social media strategy
                  </li>
                </ul>
              </div>

              <div className="mb-3">
                <p className="text-sm font-bold">
                  Target Corporation
                </p>
                <p className="text-xs text-gray-600 mb-1">May 2022 - April 2024, Iowa City, IA</p>
                <p className="text-sm mb-1">Role: General Merchandise Associate and Security Specialist</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>
                    Analyzed and improved critical daily operations by organizing consumer data on Microsoft Excel
                  </li>
                  <li>
                    Assisted and interacted with 100+ customers a day
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-2">SKILLS</h2>
              <p className="text-sm mb-1">
                <strong>Organization and Data:</strong> Digital Asset Management, File Archiving, Microsoft Excel, Power
                BI, Google Sheets
              </p>
              <p className="text-sm">
                <strong>Design and communication:</strong> Adobe Premiere Pro, Adobe Photoshop, Adobe Illustrator, Video
                Production, Photography, Videography, Graphic Design
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Desktop Layout */}
      <main className={`px-8 lg:px-12 max-w-7xl mx-auto pb-16 ${viewMode === "desktop" ? "block" : viewMode === "mobile" ? "hidden" : "hidden md:block"}`}>
        {/* Hero Section */}
        <div className="flex flex-row gap-0 shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] rounded-l-2xl rounded-r-2xl overflow-hidden h-[420px] lg:h-[450px] relative z-10">
          <Link to="/" className="w-1/2 flex flex-col cursor-pointer">
            <img
              src="images/o resume 1.png"
              alt="Resume"
              className="w-full flex-1 object-cover"
            />
            <div className="bg-[#1E1E1E] p-3">
              <h2 className="text-[#E0E0E0] font-bakbak text-2xl text-center">Resume</h2>
            </div>
          </Link>
          <div className="w-1/2 bg-[#1E1E1E] p-4 lg:p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-[#E0E0E0] font-aleo text-base leading-relaxed mb-6">
                Here's where you can get the full picture of my experience and qualifications. My resume breaks down my
                education, work history, technical skills, and the projects that have shaped my career so far.
                <br />
                <br />
                If you're interested in learning more about how my background could fit with what you're working on,
                feel free to download it or reach out directly. I'm always open to conversations about potential
                collaborations!
              </h2>
            </div>
          </div>
        </div>

        {/* Resume Content */}
        <div className="bg-white rounded-b-2xl p-6 md:p-8 lg:p-12 pt-12 md:pt-14 lg:pt-16 shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] -mt-6">
          <div className="text-black font-aleo space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-3">EDUCATION</h2>
              <p className="text-base mb-2">
                <strong>UNIVERSITY OF IOWA</strong> August 2021 - May 2025 Iowa City, IA.
              </p>
              <p className="text-base mb-1">
                Tippie College of Business – Bachelor of Business Administration in Marketing
              </p>
              <p className="text-base">
                College of Liberal Arts and Sciences – Bachelor of Arts in Cinema / Video Production
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">WORK EXPERIENCE</h2>

              <div className="mb-4">
                <p className="text-base font-bold">
                  University of Iowa Health Care &nbsp;&nbsp; February 2024 - August 2025, Iowa City, IA
                </p>
                <p className="text-base mb-2">Role: Digital Media Specialist | Audio-Visual Associate</p>
                <ul className="list-disc list-inside text-base space-y-1">
                  <li>
                    Directed and produced thousands of custom videos, photos, and graphics to help clients design and
                    manage their digital marketing projects
                  </li>
                  <li>
                    Built a digital asset management system from the ground up to catalog five years' worth of video,
                    decreasing search time from hours to a few minutes and making subjects easy to locate
                  </li>
                  <li>
                    Designed media projects with cross-functional teams for specific audiences, delivering engaging
                    educational content about Iowa Health Care's facilities
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-base font-bold">
                  VALR Production &nbsp;&nbsp; June 2022 - April 2023, Iowa City, IA
                </p>
                <p className="text-base mb-2">Role: Content Consultant</p>
                <ul className="list-disc list-inside text-base space-y-1">
                  <li>
                    Educated and assisted in the video production of 3 films, providing guidance on visual design
                    techniques that draw in engagement, improve storytelling, and improve creative direction.
                  </li>
                  <li>
                    Established the group's branding, including creating a dedicated logo and social media strategy to
                    incorporate in the progression of the organization's video content goals.
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-base font-bold">
                  Target Corporation &nbsp;&nbsp; May 2022 - April 2024, Iowa City, IA
                </p>
                <p className="text-base mb-2">Role: General Merchandise Associate and Security Specialist</p>
                <ul className="list-disc list-inside text-base space-y-1">
                  <li>
                    Analyzed and improved critical daily operations by organizing consumer data on Microsoft Excel,
                    doubling all security employees' efficiency and response time
                  </li>
                  <li>
                    Assisted and interacted with 100+ customers a day, ensuring shelves were stocked and customers were
                    satisfied
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">MARKETING AND COMMUNICATION PROJECTS</h2>
              <ul className="list-disc list-inside text-base space-y-1">
                <li>
                  Modeled and designed custom video-first social media strategies for Big Grove and Pinseekers by
                  evaluating emerging trends and competitors to target new market segments, improve outreach, and
                  engagement
                </li>
                <li>
                  Performed consumer survey research, collecting data and insights for new product launches, and
                  organizing them into tables, hypothesis tests, and identifying patterns to determine key points of
                  focus.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">SKILLS</h2>
              <p className="text-base mb-2">
                <strong>Organization and Data:</strong> Digital Asset Management, File Archiving, Microsoft Excel, Power
                BI, Google Sheets, Microsoft Word, PowerPoint
              </p>
              <p className="text-base">
                <strong>Design and communication:</strong> Adobe Premiere Pro, Adobe Photoshop, Adobe Illustrator, Video
                Production, Social Media Strategy, Branding, Marketing Analytics, Content Creation, Photography,
                Videography, Graphic Design
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
