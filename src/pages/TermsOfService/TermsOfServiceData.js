export const termsData = [
  {
    title: "Introduction",
    desc: "These Terms of Service govern your use of RendaHR software and related services offered by RendaHR. The terms 'RendaHR,' 'we,' 'us,' and 'our' refer to RendaHR Inc. 'You' refers to the user of RendaHR software and services.",
  },
  {
    title: "Access to RendaHR",

    desc: "You may access and use RendaHR software and services only for lawful purposes and in accordance with these Terms of Service. You are responsible for providing and maintaining accurate account information, and for maintaining the confidentiality of your account and password.",
  },
  {
    title: "Your Content",
    desc: "You retain all rights to any data or content you submit to RendaHR. You are responsible for the accuracy, quality, and legality of your content. You grant RendaHR a non-exclusive, worldwide, royalty-free license to use, copy, modify, and distribute your content for the purpose of providing RendaHR software and services to you.",
  },
  {
    title: "Intellectual Property",
    desc: "All trademarks, logos, service marks, and trade names displayed on RendaHR are the property of RendaHR or their respective owners. You may not use or display any trademarks, logos, service marks, or trade names without the prior written consent of RendaHR or their respective owners.",
  },
  {
    title: "Prohibited Activities",
    desc: "You agree not to use RendaHR for any purpose that is unlawful, prohibited, or that infringes on the rights of others. You also agree not to: ",
    descLists: [
      "Use RendaHR to transmit, distribute, or store any material that is offensive, abusive, or defamatory.",
      " Use RendaHR to transmit, distribute, or store any material that infringes on the intellectual property rights of others.",
      "Use RendaHR to transmit, distribute, or store any viruses, worms, or other malicious code.",
      "Use RendaHR to gain unauthorized access to any network, system, or data.",
      "Use RendaHR to interfere with or disrupt the performance of RendaHR software or services.",
      "Use RendaHR to spam or send unsolicited messages.",
      "You agree to pay all fees and charges associated with your use of RendaHR. RendaHR reserves the right to change its fees and charges at any time, with reasonable notice to you.",
    ],
  },

  {
    title: "Transaction Charge",
    desc: "RendaHR shall charge you a transaction processing fee for all payroll transactions processed via our website. These charge may vary depending on the volume of the transaction. We will try our best to inform you at all times what your transaction charge per transaction shall be.",
    subDesc:
      "Here’s an idea of what we charge per payroll transaction processed (not fixed).",
    subContent: {
      title: "Nigeria",
      content: [
        "18 Naira + 7.5% VAT for Transactions up to N5,000.",
        "40 Naira + 7.5% VAT for Transactions from N5,001 to N50,000.",
        "70 Naira + 7.5% VAT for Transactions more than N50,001.",
        "*Please note that this fees includes switch processing fees.",
      ],
    },
  },

  {
    title: "Disclaimer of Warranties",
    desc: "RendaHR software and services are provided on an 'as is' and 'as available' basis. RendaHR makes no warranties, either express or implied, regarding the accuracy, reliability, or suitability of its software or services. RendaHR does not warrant that its software or services will be error-free or uninterrupted.",
  },
  {
    title: "Limitation of Liability",
    desc: "RendaHR shall not be liable for any damages arising out of or in connection with your use of RendaHR software or services. This includes, but is not limited to, direct, indirect, incidental, punitive, and consequential damages. ",
  },
  {
    title: "Indemnification",
    desc: "You agree to indemnify and hold RendaHR, its affiliates, and their respective officers, directors, employees, and agents harmless from any and all claims, demands, losses, liabilities, and expenses (including reasonable attorneys' fees) arising out of or in connection with your use of RendaHR software or services.",
  },
  {
    title: "Termination",
    desc: "RendaHR reserves the right to terminate your access to its software or services at any time, without notice, for any reason. You may also terminate your use of RendaHR at any time by contacting us at support@joinrenda.com.",
  },
  {
    title: "Governing Law and Language",
    desc: "This Agreement is governed by the laws of the Federal Repbulic of Nigeria, without regard to choice or conflicts of law rules. The United Nations Convention on Contracts for the International Sale of Goods does not apply to this Agreement. The official language of this Agreement is English. All contract interpretations, notices, and dispute resolutions shall be in English. Translations of any of these documents are not to be construed as official or original versions of the documents.",
  },
  {
    title: "Dispute Resolution",
    descLists: [
      "If you are a resident of, or a company organized under a state or territory of, the United States, then all disputes regarding this Agreement will be settled exclusively in any court of competent jurisdiction located in the Federal Republic of Nigeria. Each party hereby consents and submits to the personal jurisdiction of such courts. Each party hereby waives any objection based on forum non-convenient and any objection to venue of any action instituted under this Agreement to the extent that an action is brought in the courts identified above.",
      "Otherwise, all disputes regarding this Agreement shall be finally resolved by binding arbitration before a single arbitrator pursuant to the then-existing Rules of Conciliation and Arbitration (“Rules”), and under the auspices, of the International Chamber of Commerce (“ICC”). The arbitrator shall be knowledgeable in the chosen law and the software industry. At either party’s request, the arbitrator shall give a written opinion stating the factual basis and legal reasoning for the decision. The arbitrator shall have the authority to determine issues of arbitrability and to award damages as permitted by this Agreement. The parties, their representatives, and any other participants shall hold the existence, content, and result of the arbitration in confidence. The arbitration proceedings will take place in Lagos, Nigeria. Judgment on the arbitration award may be entered in any court having jurisdiction.",
      "Notwithstanding the foregoing, RendaHR may, at its sole discretion, seek preliminary judicial relief in any court of competent jurisdiction (including, but not limited to, preliminary injunctive relief) as necessary to enforce its rights in its intellectual property.",
    ],
  },
  {
    title: "Limitations of Actions",
    desc: "No action arising out of this Agreement, regardless of form, may be brought by you more than one year after the date the cause of action has accrued.",
  },
  {
    title: "Support",
    desc: "If support is included in your Subscription Plan, RendaHR will provide you with support as described in your Subscription Plan.RendaHR shall not access your Data unless it is necessary to provide the Service and prevent or resolve service or technical issues, or in response to your direct request in relation to customer service issues or support.",
  },

  {
    title: "SLA commitment for paid customers",
    desc: "The following Service Level Agreements (SLA) are applicable to paid customers. Customers in Free Plans do not benefit from the below SLA.",
    slaTable: [
      {
        sn: 1,
        desc: "Application not accessible.",
        sla: "4 working hours (*)",
        exp: ["System is unavailable"],
      },
      {
        sn: 2,
        desc: "Application is accessible but key modules cannot be accessed: login, employee list and profiles, onboarding, time-off, time attendance, payroll preparation, standard reports.",
        sla: "8 working hours (*)",
        exp: ["Login page unavailable", "System doesn’t respond after login"],
      },
      {
        sn: 3,
        desc: "Non-critical feature issue or a bypass solution is possible to temporarily work around the issue",
        sla: "2 business days (*)",
        exp: [
          "A data column is supposed to be sorted in a certain order but is not.",
          "The document an employee has uploaded through isn’t being visible on the web version, but visible on mobile.",
        ],
      },
    ],
    extraDesc: [
      "(*) Times provided are based on Africa time zone and working hours (8am-6pm). SLA resolutiontime is based on the moment when Customer’s incident is acknowledged by the Customer Success (CS) team by email. All incidents above need to be reported by Customer to support@joinrenda.com for tracing.",
      "There is no SLA for new feature request.",
      "Renda support team will acknowledge incidents, classify their severity and inform Customer on next steps within 4 working hours (maximum) of receiving the request.",
      "When RendaHR Services is unavailable, or material system or API outages, or defects are detected, the User will report the issue to RendaHR via support@joinnrenda.com.",
    ],
  },
  {
    title: "Modifications and Ammendements",
    desc: "We modify the Service from time to time, including by adding or deleting features and functions, in an effort to improve our customer experience. We may update and change any part or all of these Terms of Service. If we update or change these Terms of Service, the updated Terms of Service will be posted at https://www.joinrenda.com/terms. We will do our best to let you know via the contact email you specify for your User Admin in your RendaHR account. The updated Terms of Service will become effective and binding on the next business day after it is posted. When we change these Terms of Service, the 'Last Modified' date above will be updated to reflect the date of the most recent version. If you do not agree with a modification to the Terms of Service, you must notify us in writing within 30 days after receiving notice of the modification. If you give us this notice, your subscription will continue to be governed by the terms and conditions of the Terms of Service prior to modification for the remainder of your current Subscription Term. Upon renewal, the revised Terms of Service will apply unless the Agreement has ended pursuant to the terms of the “SUBSCRIPTION TERM” or “TERMINATION” sections above.",
  },
  {
    title: "Miscellaneous",
    desc: "The parties are independent contractors. This Agreement does not create a partnership, franchise, joint venture, agency, fiduciary, or employment relationship between the parties. There are no third-party beneficiaries to this Agreement. Except for modifications made by RendaHR in accordance with the “MODIFICATIONS AND AMENDMENTS” section, above, no waiver or modification of any provision of this Agreement will be effective unless it is in writing, refers to this Agreement, and is signed by authorized representatives of the parties. No failure or delay by either party to exercise any right, power, or remedy constitutes a waiver of that right, power, or remedy. A party’s waiver of the performance of any covenant or any breach is not to be construed as a waiver of any succeeding breach or of any other covenant. Suppose any provision of this Agreement requires judicial interpretation. In that case, this Agreement is not to be more strictly construed against one party than the other. Suppose any provision of this Agreement is declared invalid by a court of competent jurisdiction. In that case, the provision will be ineffective only to the extent of the invalidity, so that the remainder of that provision and all remaining provisions of this Agreement will continue in full force and effect. You may not assign, sublicense, or transfer this Agreement without the prior written consent of Renda. Any attempt by you to sublicense, assign or transfer any rights, duties, or obligations hereunder is null and void.",
  },
];
