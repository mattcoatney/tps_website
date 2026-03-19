/**
 * Third Peak — Insights Content Data
 *
 * Combined articles, podcast appearances, and spotlights.
 *
 * Sort order:
 *   1. type === "spotlight" first (newest date first among spotlights)
 *   2. type === "article" | "podcast" interleaved, newest date first
 *
 * The first entry with featured: true gets the 2-col card treatment.
 *
 * coverImage paths are relative to insights/index.html
 */

const INSIGHTS_DATA = [

  /* ── SPOTLIGHTS ──────────────────────────────────────────── */

  {
    slug:        null,
    title:       "Watch the Talk That Started This Conversation",
    date:        "2023-01-01",
    tags:        ["AI & Work", "Leadership"],
    type:        "spotlight",
    excerpt:     "What does it mean to thrive alongside AI — not by competing with machines, but by being more fully human? This TED Talk explores that question, and it's one worth sitting with.",
    coverImage:  "../images/ted_talk.jpg",
    featured:    true,
    body:        null,
    readingTime: null,
    show:        null,
    url:         "https://www.youtube.com/watch?v=Hzy_GhX8_Cc",
    ctaLabel:    "Watch on YouTube",
    meta:        "TED · 6K+ views",
  },

  {
    slug:        null,
    title:       "The Human Cloud",
    date:        "2020-01-01",
    tags:        ["AI & Work", "Strategy"],
    type:        "spotlight",
    excerpt:     "Before AI became everyone's main topic, The Human Cloud was mapping the shift already underway — where AI and new ways of working were quietly rewriting the rules. It's a human book about technological change, full of real stories and honest frameworks.",
    coverImage:  "../images/human_cloud.png",
    featured:    false,
    body:        null,
    readingTime: null,
    show:        null,
    url:         "https://www.humancloudbook.com/",
    ctaLabel:    "Learn More",
    meta:        "Book · Available on Amazon",
  },

  /* ── ARTICLES + PODCASTS (interleaved, newest first) ─────── */

  {
    slug:        "corporations-were-always-coordination-machines",
    title:       "Corporations Were Always Coordination Machines. AI is Just Changing the Cost.",
    date:        "2026-03-13",
    tags:        ["AI & Work", "Leadership", "Strategy"],
    type:        "article",
    excerpt:     "700 years of corporate history tells one story: when the cost of coordination drops, everything restructures. AI is the biggest drop yet.",
    coverImage:  "../images/cover/corporations.jpg",
    featured:    false,
    body:        `<p>I have been sitting with a question lately: why does the modern corporation look the way it does?</p>
<p>Not in a philosophical sense. In a practical one. Why layers of management? Why full-time employees instead of contractors for everything? Why did "the firm" become the dominant unit of economic organization in the first place?</p>
<p>I put ChatGPT Deep Research to the test, and it compiled a report tracing corporate evolution across 700 years, from Florentine merchant partnerships to the English East India Company to the modern enterprise. What struck me is that the answer turns out to be remarkably consistent: <strong>firms exist to solve coordination problems, and their structure at any moment reflects the costs of production and coordination at that moment.</strong> There is no master plan, no grand vision. It's the invisible hand of the market, pushing organizations into certain configurations that optimize for productivity and success. And like evolution, it's the ones that adapt that survived.</p>
<p>When information was slow and enforcement weak, you coordinated through kinship and reputation. When railroads and telegraphs made large-scale production feasible, you built management hierarchies to substitute for market contracting. When computers and the internet reduced coordination costs again, you outsourced, modularized, and spun up platforms.</p>
<p>Same underlying logic, different shape. Every time.</p>
<h2>What the Numbers Actually Show</h2>
<p>U.S. labor productivity has grown nearly <strong>5x since 1950</strong>. IT investment as a share of GDP went from about 1.6% in the early 1970s to 4.7% today. R&amp;D intensity has more than doubled in that span.</p>
<p>This is not just "technology getting better." This is organizations learning slowly, messily how to restructure themselves around new coordination tools. The technology came first. The productivity showed up later, after firms finally redesigned their processes, decision rights, and incentive systems to match.</p>
<p>This is the part most leaders miss. It wasn't the computers that created value. It was the <em>organizational change</em> the computers eventually forced.</p>
<h2>So Here We Are</h2>
<p>AI, and especially agentic AI that can execute tasks, drops coordination costs again. Dramatically. For cognitive work this time, not just information relay.</p>
<p>Three plausible near-term scenarios:</p>
<p><strong>The most likely path:</strong> Hierarchies mostly survive, but decision cycles compress. Middle management stops being the information layer and becomes the judgment layer: goal-setting, exception-handling, cross-functional integration. Hybrid teams of humans and AI agents become the normal unit of work.</p>
<p><strong>A real possibility in some sectors:</strong> Small core teams orchestrate fleets of specialized agents, shifting the firm-size distribution in software, marketing, and professional services toward leaner "modular orchestrators" that own the strategy but rent everything else.</p>
<p><strong>The regulated reality in high-stakes domains:</strong> Health, finance, infrastructure. AI autonomy expands slowly, constrained by liability and auditing requirements. Governance gets <em>more</em> formal, not less.</p>
<h2>What This Means If You're Leading</h2>
<p>Don't roll out AI tools. Build an <strong>AI operating model</strong> — with a clear owner, a tiered governance structure, and explicit decision rights for what AI can draft, recommend, and act on autonomously.</p>
<p><strong>Instrument before you automate.</strong> Agents amplify whatever process reality exists underneath them. If your workflows are messy and your baselines unmeasured, automation makes that worse faster.</p>
<p>And maybe most importantly: <strong>build a workforce transition plan before you need one.</strong> AI changes task composition faster than the external labor market adjusts. The organizations that handle this well will be the ones that created internal pathways — reskilling, mobility, new role definitions — rather than discovering the problem on the back end.</p>
<h2>The Pattern Holds</h2>
<p>Every major coordination technology in history reshaped corporate structure, not by making the old structure obsolete overnight, but by making a different structure newly possible. The leaders who moved early, who reorganized <em>with</em> the technology instead of waiting for the settled picture, captured the gains.</p>
<p>We're in that window now.</p>`,
    readingTime: "4 min read",
    show:        null,
    url:         null,
    ctaLabel:    null,
    meta:        null,
  },

  {
    slug:        null,
    title:       "Chatbots Were the Trailer, Agents Are the Movie",
    date:        "2026-02-17",
    tags:        ["AI & Work", "Tools"],
    type:        "podcast",
    excerpt:     "AI has moved well beyond chatbots — today's agents can plan, execute, and iterate on complex tasks with minimal human intervention. We explored the real productivity gains happening in software development, why clear specifications matter more than ever, and the honest ethical questions that come with automating more of our work.",
    coverImage:  null,
    featured:    false,
    body:        null,
    readingTime: null,
    show:        "The Wired Garage with Pops",
    url:         "https://podcasts.apple.com/gm/podcast/chatbots-were-the-trailer-agents-are-the-movie/id1861572678?i=1000750125404",
    ctaLabel:    null,
    meta:        null,
  },

  {
    slug:        null,
    title:       "Unleashing Human Creativity with Agentic AI",
    date:        "2025-12-15",
    tags:        ["AI & Work", "Leadership"],
    type:        "podcast",
    excerpt:     "How does agentic AI change the way we work — and what does it mean for human creativity? We talked through how AI enhances collaboration rather than replacing it, the necessity of human judgment in high-stakes decisions, and what skills leaders need to cultivate as autonomous systems become more capable.",
    coverImage:  null,
    featured:    false,
    body:        null,
    readingTime: null,
    show:        "The Wired Garage with Pops",
    url:         "https://podcasts.apple.com/gm/podcast/unleashing-human-creativity-with-agentic-a/id1861572678?i=1000741426777",
    ctaLabel:    null,
    meta:        null,
  },

  {
    slug:        "do-something-ai-isnt-strategy",
    title:       "\"Do Something with AI!\" Isn't a Strategy",
    date:        "2025-09-24",
    tags:        ["AI & Work", "Leadership", "Strategy"],
    type:        "article",
    excerpt:     "Vague AI mandates from the top don't inspire action — they create confusion. Here's what leaders actually need to do.",
    coverImage:  "../images/cover/do_something.png",
    featured:    false,
    body:        `<p>I've heard some version of this from senior leaders more times than I can count: <em>"This AI thing is BIG. We need to do something with it."</em></p>
<p>And then… nothing. No direction. No priorities. Just a room full of people nodding and quietly wondering what that means for their team.</p>
<p>This pattern isn't new. We saw it with the cloud. With mobile. With the internet. Every major technology wave produces a version of this moment where executives feel the urgency without yet having the clarity to act on it. The difference with AI is that the pace is faster, the stakes feel higher, and the gap between "doing something" and doing something <em>strategic</em> has never been more costly.</p>
<p>Technology competency is no longer just IT's job. It's a leadership responsibility across the whole organization.</p>
<h2>What Actually Helps</h2>
<p><strong>Use AI yourself.</strong> You can't lead something you haven't experienced. Spend real time with these tools — not a demo, not a summary from your team. Get hands-on. You'll develop an intuition for both the possibilities and the limitations that no briefing can give you.</p>
<p><strong>Set clear direction.</strong> Pick specific areas where AI can move the needle: operational efficiency, customer experience, product innovation. And be equally clear about where it's not the answer. Vague mandates send teams chasing shiny objects and burning cycles on work that doesn't connect to anything.</p>
<p><strong>Have a workforce plan.</strong> Who are you hiring? Who are you upskilling? What does "AI-fluent" mean at your organization? Give people permission to experiment — with guardrails that protect privacy and IP — and watch what emerges.</p>
<p><strong>Lead the change visibly.</strong> AI adoption is organizational transformation. It requires the same clarity, confidence, and communication as any other major change initiative. If you're not seen engaging with it, neither will your teams.</p>
<p>The leaders who get this right won't be the ones who issued the boldest mandates. They'll be the ones who set direction, built capability, and shaped a culture where thoughtful AI adoption could actually take root.</p>`,
    readingTime: "2 min read",
    show:        null,
    url:         null,
    ctaLabel:    null,
    meta:        null,
  },

  {
    slug:        "ai-no-code-promise",
    title:       "Is AI Finally Delivering on the No-Code Promise? Or Just Another Mirage?",
    date:        "2025-09-16",
    tags:        ["AI & Work", "Tools", "Strategy"],
    type:        "article",
    excerpt:     "For decades, every new tool promised to let non-developers build real software. Generative AI is the closest we've gotten — but the gap between prototype and production is still very real.",
    coverImage:  "../images/cover/desert_mirage.png",
    featured:    false,
    body:        `<p>For as long as I can remember, the technology industry has promised to democratize software development. BI dashboards. Workflow builders. Drag-and-drop platforms. Each wave arrived with the same pitch: <em>you won't need developers for this.</em> Each wave eventually required them anyway, when the simple things got complicated and the prototype needed to become something real.</p>
<p>Generative AI feels different — and in some ways, it genuinely is. For the first time, non-developers can describe what they want in plain language and get functional code back. That's not nothing. That's actually remarkable.</p>
<p>But remarkable isn't the same as ready for production.</p>
<h2>Where It Actually Works</h2>
<p>The most honest framing I've found is this: generative AI is an extraordinary prototyping tool. It can get you from idea to working demo faster than anything that's come before it. For small internal tools — the kind a team of five to twenty people actually uses — it may be all you need.</p>
<p>The challenge is when organizations mistake the prototype for the product. A napkin sketch and a finished blueprint serve different purposes. When a lightweight internal tool needs to scale, handle edge cases, maintain security, and be supported over time, you still need engineering investment. The AI didn't change that — it just made the napkin sketch a lot easier to produce.</p>
<h2>What Leaders Should Do</h2>
<p>Avoid both failure modes here. Don't oversell what AI can do (your engineering team will pay the price when expectations meet reality). But don't dismiss it either — the teams exploring these tools right now are developing instincts that will matter a lot in the next few years.</p>
<p>Encourage experimentation with guardrails. Protect privacy and IP. And when a prototype shows genuine promise, treat it as the starting point for real investment — not the finished product.</p>
<p>Don't throw away the napkin. But don't build on it either.</p>`,
    readingTime: "2 min read",
    show:        null,
    url:         null,
    ctaLabel:    null,
    meta:        null,
  },

  {
    slug:        "personal-ai-revolution",
    title:       "The Personal AI Revolution",
    date:        "2025-08-28",
    tags:        ["AI & Work", "Education"],
    type:        "article",
    excerpt:     "Before PCs, computers were for governments and corporations. We're at a similar inflection point with AI — and the implications are just as profound.",
    coverImage:  "../images/cover/homebrew.jpg",
    featured:    false,
    body:        `<p>In 1975, computers were not for people. They were for governments, universities, and corporations — massive machines that required dedicated facilities and specialized staff. The idea that an individual might own one, let alone use one creatively, was absurd to most people in the industry.</p>
<p>Then a small group of hobbyists started meeting in a garage in Menlo Park.</p>
<p>The Homebrew Computer Club didn't set out to change the world. They just wanted to build things. But the movement they sparked eventually put a computer on every desk and in every pocket — and reshaped how humans work, create, and connect.</p>
<h2>We're Here Again</h2>
<p>Right now, machine learning is mostly accessible to large organizations with deep pockets and specialized talent. Building a useful AI system requires data infrastructure, engineering expertise, and compute resources that most individuals and small teams simply don't have.</p>
<p>But the pieces are falling into place. Open-source frameworks. Faster hardware. Cloud APIs that abstract away complexity. The hobbyists are tinkering again.</p>
<h2>What Personal AI Could Look Like</h2>
<p>I think the most useful framing isn't AI as a product you buy, but AI as an extension of yourself — something that learns from your environment, reflects your priorities, and gets more useful the longer it works with you. Not a system that arrives fully formed, but one that develops, the way a person does.</p>
<p>When word processors arrived, they didn't make writers obsolete. They gave writers leverage. The software handled the mechanics; the person supplied the creativity and judgment. I think that's the right model for AI too.</p>
<p>When genuinely personal AI becomes accessible — and it will — the people who've been paying attention, experimenting, and building their own intuitions about this technology will be ready to use it in ways that matter.</p>`,
    readingTime: "2 min read",
    show:        null,
    url:         null,
    ctaLabel:    null,
    meta:        null,
  },

  {
    slug:        "why-algorithms-develop-bias",
    title:       "Why Algorithms Develop Bias, and How to Combat It",
    date:        "2025-07-10",
    tags:        ["AI & Work", "Skills", "Education"],
    type:        "article",
    excerpt:     "Algorithms learn from human-generated data — which means they inherit human prejudices. Understanding why is the first step to building something better.",
    coverImage:  "../images/cover/discrimination.jpg",
    featured:    false,
    body:        `<p>A few years ago, an NPR Hidden Brain episode on unconscious bias stuck with me. The research showed that Western culture has deeply embedded associations — white with good, black with evil — that most of us carry without knowing it. Our brains developed these patterns for evolutionary reasons: in-group trust helped early humans survive. The problem is that those same shortcuts cause real harm in a modern, diverse world.</p>
<p>And now we're building machines that learn the same way we do.</p>
<h2>How Bias Gets Into the Model</h2>
<p>Machine learning systems are trained on data generated by humans — social media posts, hiring records, criminal justice databases, medical histories. If those datasets reflect existing biases (and they almost always do), the algorithm absorbs them. Unlike a human, the algorithm can't pause and question its assumptions. It just optimizes for the patterns it was shown.</p>
<p>This isn't a hypothetical. We've seen it in hiring tools that downranked resumes from women. In facial recognition systems that struggled with darker skin tones. In recidivism prediction tools that disproportionately flagged Black defendants. The algorithm didn't <em>decide</em> to be biased. It learned to be, from data we gave it.</p>
<h2>What We Can Do About It</h2>
<p>The research on human bias offers a useful clue: exposure to diverse people and environments reduces in-group favoritism. The same principle applies to algorithms. Diverse training data produces less skewed models.</p>
<p>In practice, this means:</p>
<ul>
<li><strong>Audit your datasets</strong> before training. Look for who's overrepresented and who's missing.</li>
<li><strong>Expand the hiring pool</strong> beyond your existing networks. The people building these systems shape what they learn to see as normal.</li>
<li><strong>Test across subgroups</strong> — not just overall accuracy, but accuracy for each demographic your system will affect.</li>
<li><strong>Broaden deployment scope</strong> across markets and cultures, rather than assuming one population's data generalizes everywhere.</li>
</ul>
<p>There's no silver bullet. Bias is woven into the data we have, which is the record of an imperfect world. But acknowledging that — and actively working against it — is how we start building systems that are actually worthy of the trust we're placing in them.</p>`,
    readingTime: "2 min read",
    show:        null,
    url:         null,
    ctaLabel:    null,
    meta:        null,
  },

  {
    slug:        null,
    title:       "Using AI in Risk-Averse Industries",
    date:        "2025-03-01",
    tags:        ["AI & Work", "Strategy", "Leadership"],
    type:        "podcast",
    excerpt:     "Healthcare, finance, legal — highly regulated industries can't just move fast and break things. How to introduce AI thoughtfully in risk-averse environments, where to start, what guardrails matter, and how to build trust with teams that are understandably cautious.",
    coverImage:  null,
    featured:    false,
    body:        null,
    readingTime: null,
    show:        "Product Mastery Now",
    url:         "https://productmasterynow.com/blog/531-using-ai-in-risk-adverse-industries-with-matt-coatney/",
    ctaLabel:    null,
    meta:        null,
  },

  {
    slug:        null,
    title:       "AI: The Jagged Frontier",
    date:        "2024-11-27",
    tags:        ["AI & Work", "Strategy"],
    type:        "podcast",
    excerpt:     "The \"jagged frontier\" of AI captures something real — it's remarkably capable in some areas and surprisingly brittle in others. What data foundations companies actually need before chasing AI, where generative AI reliably delivers business value, and how to set honest expectations.",
    coverImage:  null,
    featured:    false,
    body:        null,
    readingTime: null,
    show:        "The Forward Slash Podcast",
    url:         "https://podcasts.apple.com/us/podcast/ai-the-jagged-frontier/id1744372906?i=1000678409487",
    ctaLabel:    null,
    meta:        null,
  },

  {
    slug:        null,
    title:       "The Human Cloud: The World of Projects and Freelancers",
    date:        "2021-11-11",
    tags:        ["AI & Work", "Strategy"],
    type:        "podcast",
    excerpt:     "How freelancing and project-based work combined with AI and machine learning are disrupting how work gets done — including inside law firms, where legal matters are essentially projects and contract attorneys are already functioning as freelancers.",
    coverImage:  null,
    featured:    false,
    body:        null,
    readingTime: null,
    show:        "The Geek In Review",
    url:         "https://podcasts.apple.com/us/podcast/matthew-coatney-the-human-cloud-the-world/id1401505293?i=1000541457900",
    ctaLabel:    null,
    meta:        null,
  },

  {
    slug:        null,
    title:       "Orchestrating the Freelance Economy",
    date:        "2021-05-04",
    tags:        ["AI & Work", "Strategy"],
    type:        "podcast",
    excerpt:     "How AI and the rise of freelance work are transforming employment — the shift from assembly-line roles to project-based work, the enabling technologies making distributed teams possible at scale, and why orchestration is becoming one of the most valuable capabilities anyone can develop.",
    coverImage:  null,
    featured:    false,
    body:        null,
    readingTime: null,
    show:        "Futurized",
    url:         "https://www.podbean.com/media/share/pb-23532-ff9a12",
    ctaLabel:    null,
    meta:        null,
  },

  {
    slug:        null,
    title:       "The Coming Work Paradigm Shift",
    date:        "2021-04-12",
    tags:        ["AI & Work", "Strategy", "Leadership"],
    type:        "podcast",
    excerpt:     "How the future of work is being reshaped by technology, the gig economy, and AI — and what that means for product managers and business leaders. The concept of \"Changemakers\": people who thrive not by clinging to job titles, but by driving value through an entrepreneurial mindset.",
    coverImage:  null,
    featured:    false,
    body:        null,
    readingTime: null,
    show:        "Product Mastery Now",
    url:         "https://productmasterynow.com/blog/tei-330-the-coming-work-paradigm-shift-with-matt-coatney/",
    ctaLabel:    null,
    meta:        null,
  },

];

/* Helper: format date for display */
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}
