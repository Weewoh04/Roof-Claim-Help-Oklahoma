export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  sections: {
    heading: string;
    body: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-hail-size-matters-for-roof-claims",
    title: "Why Hail Size Matters for Roof Claims and How Long You Have to Report Damage",
    description:
      "Learn why hail size, storm date, roof condition, and address-specific hail reports matter when documenting Oklahoma roof damage for insurance.",
    readTime: "7 min read",
    sections: [
      {
        heading: "Hail size helps explain the force of the storm",
        body: [
          "Not all hailstorms create the same kind of roof damage. Pea-size hail may sound loud and still do very little to a roof, while larger hail can bruise shingles, knock away protective granules, dent soft metals, crack roof accessories, and damage gutters, vents, siding, screens, fencing, and exterior paint.",
          "Hail size matters because it helps connect the visible damage to the severity of the storm. If a homeowner has roof concerns after reports of quarter-size, golf-ball-size, or larger hail nearby, that storm history becomes an important part of the documentation.",
        ],
      },
      {
        heading: "The roof condition still matters too",
        body: [
          "Hail size is only one piece of the picture. The age of the shingles, roof slope, shingle type, sun exposure, prior wear, installation quality, and storm direction can all affect what damage looks like.",
          "Two homes on the same street can have different results after the same storm. That is why a roof-level inspection matters. A hail report can show what likely happened in the area, but the actual roof still needs to be documented.",
        ],
      },
      {
        heading: "Why the storm date matters",
        body: [
          "Insurance claims need a date of loss. After a hailstorm, homeowners may notice damage right away, or they may not see the signs until weeks or months later when granules show up in gutters, a leak appears, or a contractor points out damage.",
          "An address-specific hail report can help identify storm dates tied to the property. That report may show estimated hail size, storm path, and timing near the address. This can be useful when the homeowner is not sure which storm caused the damage.",
        ],
      },
      {
        heading: "How long do you have to report hail damage?",
        body: [
          "There is not one universal answer for every homeowner. Reporting deadlines can depend on the insurance policy, endorsements, carrier requirements, and the facts of the loss. Some policies require prompt notice. Some may have specific time limits for wind or hail claims. Some may treat replacement cost, depreciation, or supplemental payments differently depending on timing.",
          "The safest practical answer is this: report suspected damage as soon as you reasonably can after discovering it, and review your policy or ask your insurance carrier what deadlines apply. Waiting too long can make it harder to connect the damage to a specific storm and can create avoidable claim questions.",
        ],
      },
      {
        heading: "Why pulling a hail report can help",
        body: [
          "A hail report can help support the storm timeline for a specific address. It does not replace a roof inspection and it does not guarantee coverage, but it can help answer important questions: Did hail occur near the home? How large was it estimated to be? When did it happen? Was the property inside or near the storm path?",
          "Homeowners can ask for a hail report to be pulled for their address before or during the claims process. This gives the roofer, general contractor, homeowner, and adjuster a clearer starting point for discussing the date of loss and storm conditions.",
        ],
      },
      {
        heading: "What to document after a hailstorm",
        body: [
          "Take photos of hailstones if it is safe, especially next to a coin or tape measure for scale. Photograph dents in gutters, downspouts, vents, garage doors, siding, screens, fencing, outdoor furniture, and vehicles. Save screenshots of local weather alerts or neighborhood storm reports if you have them.",
          "Inside the home, photograph ceiling stains, wet insulation, peeling paint, or water marks. Keep temporary repair receipts and do not throw away damaged materials unless your insurer tells you to or safety requires it.",
        ],
      },
      {
        heading: "Why a roofer or general contractor should be involved",
        body: [
          "A roofer or general contractor can inspect the property, document roof and exterior damage, help identify whether multiple trades are involved, and explain repair scope during the claim process. That support matters when hail affects more than shingles.",
          "If gutters, siding, windows, fencing, drywall, paint, or interior leaks are part of the loss, a general contractor can help organize the bigger picture. The insurance carrier decides coverage under the policy, but the contractor helps document the physical damage and the real repair requirements.",
        ],
      },
      {
        heading: "The bottom line",
        body: [
          "Hail size matters because it helps explain storm severity, but it is only one part of a strong claim file. The roof condition, storm date, address-specific hail data, photos, inspection findings, and policy deadlines all matter too.",
          "If you think your home was hit by hail, do not wait until a small issue becomes a leak. Request a roof check, ask whether a hail report can be pulled for your address, and contact your insurance carrier promptly if damage is confirmed.",
        ],
      },
    ],
  },
  {
    slug: "general-contractor-vs-roofer-for-insurance-claims",
    title: "Why a General Contractor Can Matter More Than Just a Roofer on Insurance Claims",
    description:
      "When storm damage involves roofing, gutters, siding, windows, fencing, drywall, paint, or other trades, a general contractor can help coordinate the full repair scope with insurance.",
    readTime: "7 min read",
    sections: [
      {
        heading: "Storm damage is not always just a roof problem",
        body: [
          "After a major Oklahoma hail or wind storm, the roof may be the first thing homeowners notice. But the same storm can also damage gutters, downspouts, siding, window screens, garage doors, fencing, exterior paint, interior drywall, insulation, and ceilings.",
          "If each trade is treated separately, the claim can become confusing fast. One contractor looks only at the roof. Another looks only at gutters. Someone else handles drywall or paint. Meanwhile, the insurance estimate may not reflect how all of those pieces connect.",
        ],
      },
      {
        heading: "A roofer focuses on the roof system",
        body: [
          "A good roofer is valuable when the claim is centered on shingles, decking, ventilation, flashing, valleys, pipe boots, drip edge, and roof accessories. Roof-specific knowledge matters, especially during inspections and adjuster meetings.",
          "But if the claim involves multiple trades, a roofer may not be set up to manage the whole project. That can leave the homeowner coordinating separate scopes, separate schedules, separate estimates, and separate supplement questions.",
        ],
      },
      {
        heading: "A general contractor sees the full repair scope",
        body: [
          "A general contractor can look at the entire storm loss as one connected project. That matters when roof work affects gutters, when gutter work affects fascia, when leaks affect drywall and paint, or when exterior damage requires multiple trades to be scheduled in the right order.",
          "Instead of asking the homeowner to become the project manager, a general contractor can coordinate trades, review the insurance estimate for missing scope, organize documentation, and help keep the repair process moving in the right sequence.",
        ],
      },
      {
        heading: "Multiple trades can create insurance scope gaps",
        body: [
          "Insurance estimates are built from line items. When several trades are involved, it is common for the first estimate to miss something: detach and reset items, code requirements, paint blending, fascia work, gutter accessories, interior protection, permit needs, or trade minimums.",
          "A general contractor can compare the estimate against what the full repair actually requires. If something is missing or under-scoped, the contractor can help prepare photos, measurements, notes, and pricing support for a supplement request.",
        ],
      },
      {
        heading: "Scheduling matters more than homeowners expect",
        body: [
          "On a multi-trade claim, the order of work matters. Gutters may need to come off before roofing. Siding or fascia may affect gutter installation. Interior drywall should not be closed up before the leak source is addressed. Paint may need to happen after repairs are complete.",
          "When the timing is wrong, homeowners can end up with rework, delays, extra costs, or repairs that look patched together. A general contractor helps sequence the project so one trade does not create problems for the next.",
        ],
      },
      {
        heading: "Why this helps during the claims process",
        body: [
          "The insurance carrier determines coverage under the policy, but the contractor helps explain the construction reality. On a multi-trade claim, that construction reality is bigger than shingles.",
          "Having a general contractor involved can make adjuster meetings, estimate reviews, supplements, and final invoicing more organized. The homeowner has one central person helping connect the roof, exterior, and interior repair pieces instead of trying to translate between multiple trades and insurance paperwork alone.",
        ],
      },
      {
        heading: "When a general contractor is especially helpful",
        body: [
          "Consider working with a general contractor when the storm damaged more than the roof, when there is interior leaking, when gutters or siding are involved, when the insurance estimate includes several trades, or when the first payment does not seem to match the actual repair needs.",
          "The goal is not to complicate the claim. The goal is to make sure the complete storm damage scope is documented, coordinated, and repaired in a way that makes sense for the whole home.",
        ],
      },
    ],
  },
  {
    slug: "what-to-do-after-a-hail-storm-in-oklahoma",
    title: "What to Do After a Hail Storm in Oklahoma",
    description:
      "A practical homeowner checklist for documenting hail, protecting your home, and getting a roof inspection after Oklahoma severe weather.",
    readTime: "5 min read",
    sections: [
      {
        heading: "Start with safety and documentation",
        body: [
          "After a hail storm, do not rush onto the roof. Wet shingles, hidden decking damage, and slick ladder conditions can turn a roof check into an injury quickly. Start from the ground and document what you can see safely.",
          "Take photos of hailstones, dents in gutters or vents, damaged window screens, downspouts, patio furniture, fence marks, and any granules collecting near gutters. If water is coming inside, take photos and videos before cleanup when it is safe to do so.",
        ],
      },
      {
        heading: "Why a roofer should be involved early",
        body: [
          "A storm damage roofer can inspect areas homeowners cannot see from the ground and document roof conditions in a way that is useful during the claims process. That matters because hail damage is not always obvious, and a rushed claim can miss items that affect the actual repair scope.",
          "Having a roofer with you through the claim helps keep the conversation focused on the roof system, not guesswork. The roofer can point out impact marks, damaged accessories, ventilation concerns, flashing issues, and code-related items that may need to be addressed.",
        ],
      },
      {
        heading: "Do not wait until leaks show up",
        body: [
          "Hail damage can shorten shingle life even when there is no active leak yet. Granule loss and bruising can expose asphalt to Oklahoma sun, wind, and future storms.",
          "If your neighborhood was hit, if soft metals are dented, or if neighbors are getting inspections, it is reasonable to request a roof check before the next round of weather.",
        ],
      },
    ],
  },
  {
    slug: "how-to-tell-if-your-roof-has-hail-damage",
    title: "How to Tell If Your Roof Has Hail Damage",
    description:
      "Common signs of hail damage on Oklahoma roofs and why many issues are hard to confirm without a roof-level inspection.",
    readTime: "6 min read",
    sections: [
      {
        heading: "Ground-level clues can tell you when to look closer",
        body: [
          "Look for dents in gutters, downspouts, metal roof vents, garage doors, window screens, fence stain, and outdoor equipment. These are not proof of roof damage by themselves, but they can show that hail had enough size or force to affect the property.",
          "Granules near downspouts can also matter. Some granule loss is normal over time, but a sudden collection after a storm can be a sign that shingles took an impact.",
        ],
      },
      {
        heading: "Roof damage is often subtle",
        body: [
          "Hail can bruise shingles, knock away protective granules, damage ridge caps, and mark roof accessories. From the ground, those issues can blend into the shingle pattern, especially on darker roofs or steep slopes.",
          "That is one reason homeowners benefit from a roofer during the claim process. A roofer knows where hail patterns usually show up, how to photograph slopes, and how to explain the difference between age-related wear and storm-related damage.",
        ],
      },
      {
        heading: "A good inspection is more than a quick glance",
        body: [
          "A helpful inspection should document slopes, vents, pipe boots, flashing, gutters, interior leak signs, and related storm damage. If insurance becomes involved, clear documentation can make the adjuster meeting more productive.",
          "The goal is not to force a claim. The goal is to understand the roof condition before decisions are made.",
        ],
      },
    ],
  },
  {
    slug: "should-i-call-insurance-or-a-roofer-first",
    title: "Should I Call Insurance or a Roofer First?",
    description:
      "How to think through the first call after storm damage, and why a roofer can help you understand the condition before filing a claim.",
    readTime: "6 min read",
    sections: [
      {
        heading: "You can call either, but information matters",
        body: [
          "If there is emergency damage or active leaking, protect the home first and notify your insurance carrier as your policy requires. For non-emergency storm concerns, many homeowners prefer to have the roof inspected before deciding whether a claim makes sense.",
          "A roofer cannot decide coverage for your carrier. What a roofer can do is inspect the roof, document visible storm damage, explain repair concerns, and help you understand whether there is enough damage to justify the next step.",
        ],
      },
      {
        heading: "Why having a roofer with you helps",
        body: [
          "Insurance adjusters are often moving fast after major Oklahoma storms. Having a roofer present during the adjuster meeting can help make sure roof conditions are seen, photographed, and discussed while everyone is on site.",
          "A roofer can answer construction questions, identify missing scope items, and explain why certain components may need replacement instead of patching. That support can be especially helpful with steep roofs, multiple slopes, damaged accessories, or leaks that are hard to trace.",
        ],
      },
      {
        heading: "Keep the roles clear",
        body: [
          "Your insurance carrier determines coverage under your policy. Your roofer helps document the physical roof condition and repair requirements. Your attorney or licensed professional can advise on legal or policy disputes.",
          "When everyone stays in their lane, the claim process is usually cleaner, calmer, and better documented.",
        ],
      },
    ],
  },
  {
    slug: "acv-vs-rcv-explained-for-homeowners",
    title: "ACV vs RCV Explained for Homeowners",
    description:
      "Plain-English explanation of actual cash value, replacement cost value, depreciation, and why roof claim payments can arrive in stages.",
    readTime: "5 min read",
    sections: [
      {
        heading: "ACV means actual cash value",
        body: [
          "ACV generally means the value of the damaged roof after depreciation is considered. If a roof is older, the initial ACV payment may be lower than the full replacement estimate.",
          "This can surprise homeowners because the first check may not look like enough to complete the roof. That does not always mean the claim is finished.",
        ],
      },
      {
        heading: "RCV means replacement cost value",
        body: [
          "RCV generally refers to the cost to replace covered damage with new materials, subject to policy terms, deductible, and approved scope. In many replacement cost policies, recoverable depreciation may be released after the work is completed and documented.",
          "Your exact policy controls how this works. Read the claim paperwork closely and ask your carrier direct questions if anything is unclear.",
        ],
      },
      {
        heading: "Why a roofer matters during payment questions",
        body: [
          "A roofer can compare the insurance estimate to the actual work needed on the roof. If required items are missing, if quantities look wrong, or if code-related components were not included, the roofer can prepare documentation for a supplement request.",
          "This is one of the biggest reasons to have a roofer with you through the claims process. The paperwork is financial, but the underlying question is construction scope: what does it actually take to restore the roof correctly?",
        ],
      },
    ],
  },
  {
    slug: "why-did-insurance-only-pay-part-of-my-roof-claim",
    title: "Why Did Insurance Only Pay Part of My Roof Claim?",
    description:
      "Common reasons a roof claim payment may look incomplete at first, including deductibles, depreciation, supplements, and missing scope.",
    readTime: "6 min read",
    sections: [
      {
        heading: "The deductible is your responsibility",
        body: [
          "Your deductible is subtracted from the covered loss according to your policy. In Oklahoma, some policies use a percentage deductible for wind and hail, so the amount can be larger than homeowners expect.",
          "If the check is lower than the estimate, the deductible may be one reason.",
        ],
      },
      {
        heading: "Depreciation may be held back",
        body: [
          "Some policies hold back depreciation until the approved work is completed. That means the first payment may be an ACV payment, with recoverable depreciation handled later if the policy allows it.",
          "Read the estimate summary and claim letter carefully. The numbers usually show deductible, depreciation, and net payment separately.",
        ],
      },
      {
        heading: "The original estimate may be missing items",
        body: [
          "Roof claims can miss items during the first inspection, especially after widespread storms when adjusters are covering many homes. Missing items might include vents, flashing, starter, ice and water shield, drip edge, decking issues, steep charges, or code-required items.",
          "This is where a roofer can be extremely valuable. A roofer can review the estimate against the real roof, document missing scope, and help submit a clear supplement request when additional work is justified.",
        ],
      },
    ],
  },
  {
    slug: "roof-leak-after-storm-what-to-do-now",
    title: "Roof Leak After Storm: What To Do Now",
    description:
      "Immediate roof leak steps for Oklahoma homeowners, including safety, photos, temporary protection, and when to ask for tarping help.",
    readTime: "5 min read",
    sections: [
      {
        heading: "Protect the inside first",
        body: [
          "Move furniture, electronics, documents, and valuables away from the leak. Use buckets or containers to catch water safely, and avoid placing anything near electrical outlets or light fixtures.",
          "Take photos and videos of the active leak, ceiling stains, wet flooring, and any exterior storm damage you can see safely.",
        ],
      },
      {
        heading: "Do not climb on a wet roof",
        body: [
          "A wet roof can be dangerous even for experienced people. Storm damage can loosen shingles, soften decking, and make normal footing unreliable.",
          "If water is actively entering or more rain is coming, request emergency help or tarping instead of trying to diagnose the roof yourself.",
        ],
      },
      {
        heading: "Why a roofer helps with leak claims",
        body: [
          "Leaks can be tricky because water may enter at one point and show up somewhere else inside. A roofer can inspect roof penetrations, flashing, shingles, valleys, and storm damage patterns to identify likely entry points.",
          "During a claim, that roof-level explanation can help connect interior damage to exterior storm damage and support a clearer repair plan.",
        ],
      },
    ],
  },
  {
    slug: "what-happens-at-a-roof-adjuster-meeting",
    title: "What Happens at a Roof Adjuster Meeting?",
    description:
      "What Oklahoma homeowners can expect when an insurance adjuster inspects roof damage, and why having a roofer present can help.",
    readTime: "7 min read",
    sections: [
      {
        heading: "The adjuster reviews the damage",
        body: [
          "An adjuster meeting is the insurance carrier's inspection of the property damage. The adjuster may look at the roof, gutters, vents, interior leaks, elevations, and other storm-related items.",
          "They may take photos, measurements, notes, and damage counts. Afterward, the carrier may issue an estimate, request more information, approve part of the damage, or deny the claim based on policy terms and inspection findings.",
        ],
      },
      {
        heading: "Why your roofer should be there",
        body: [
          "Having a roofer present can make the meeting more accurate and less stressful. The roofer can walk the roof with the adjuster when appropriate, point out storm damage, explain repair requirements, and help make sure important items are not overlooked.",
          "This is not about arguing. It is about having someone there who understands roofing systems, Oklahoma storm damage patterns, installation details, and the scope needed to restore the roof correctly.",
        ],
      },
      {
        heading: "What to have ready",
        body: [
          "Have your claim number, storm date if known, photos, videos, interior leak documentation, and any temporary repair records ready. If you already had a roof inspection, have those photos available too.",
          "After the meeting, compare the insurance estimate to the roofer's findings. If something important is missing, your roofer can help organize documentation for a supplement request.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
