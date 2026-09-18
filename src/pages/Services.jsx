import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
  LayoutGroup,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useReducedMotion,
} from "framer-motion";

import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiCheck,
} from "react-icons/fi";

import Seo from "../lib/Seo";
import Eyebrow from "../components/ui/Eyebrow";
import CTABand from "../components/sections/CTABand";
import { services } from "../data/services";

/* ================================================================
   HELPERS
================================================================ */

function cleanText(value) {
  if (!value) return "";

  if (Array.isArray(value)) {
    return value.map(cleanText).join(" ");
  }

  return String(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/[{}[\]()"']/g, " ")
    .replace(/[\/_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

/* ================================================================
   SERVICE-SPECIFIC IMAGE SYSTEM
================================================================ */

const SERVICE_IMAGE_CATEGORIES = [
  {
    keywords: ["custom software"],
    images: [
      "https://th.bing.com/th/id/OIP.rqsAstfHbIqpl5djLfe6AAHaE7?w=225&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.rqsAstfHbIqpl5djLfe6AAHaE7?w=225&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
    ],
  },
  {
    keywords: ["app development"],
    images: [
      "https://images.openai.com/static-rsc-4/7Ph7B8cB0zCjG75M7cNXoSKXBuwzUhYwTaJl3MfhOfFmbW8fmgXQQVuRbcgAFlXaSskxpadycIIqsjrKhd-5bHAvLdbJG80sO2_sk58nmvvXiE1AmEkdEU6KIXzeAdqIncyPjQoBfEA9n2eeid8VJyB7ALs_I8SK7QSWS0gUzmznl3KcUPlu03q268i67gH9?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/7Ph7B8cB0zCjG75M7cNXoSKXBuwzUhYwTaJl3MfhOfFmbW8fmgXQQVuRbcgAFlXaSskxpadycIIqsjrKhd-5bHAvLdbJG80sO2_sk58nmvvXiE1AmEkdEU6KIXzeAdqIncyPjQoBfEA9n2eeid8VJyB7ALs_I8SK7QSWS0gUzmznl3KcUPlu03q268i67gH9?purpose=fullsize",
    ],
  },
  {
    keywords: ["web development"],
    images: [
      "https://images.openai.com/static-rsc-4/m1y9hlmrvafZSaNx4uIfMhZMftXD7DnOgTrB5_kZiI-dD25WB1ISivJ6ltt7wlrdca7chH6d7FrJcu4obMXIc9jqy2qe1sm9m83yevsy0QyfcDWEXUf_Lg99c4EuUSRaOYqyGs9peyw-AlaYQLkZowLRmnE6NlthhZ5RytrU8GrNGIgNi9RTLTMcNKwI-fNJ?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/m1y9hlmrvafZSaNx4uIfMhZMftXD7DnOgTrB5_kZiI-dD25WB1ISivJ6ltt7wlrdca7chH6d7FrJcu4obMXIc9jqy2qe1sm9m83yevsy0QyfcDWEXUf_Lg99c4EuUSRaOYqyGs9peyw-AlaYQLkZowLRmnE6NlthhZ5RytrU8GrNGIgNi9RTLTMcNKwI-fNJ?purpose=fullsize",
    ],
  },
  {
    keywords: ["ui ux design"],
    images: [
      "https://images.openai.com/static-rsc-4/jCUrdyJ5R0J5auHx9ItXZVNpj-OSUIleOczXH9GEjl_XS4thJ_-GCnJzS62DSipiaqOA23z44CkDtxczWEQ64Ihbjh0ICkGFTMHujCnJSVI-zZcPYmlxIzCwdEvNFgSr8Ej0aLSN45Ip6BzsmhzEqkGZMrdHii7luiHU3GUcHb83BrOluau6n3U52Dwscyo8?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/jCUrdyJ5R0J5auHx9ItXZVNpj-OSUIleOczXH9GEjl_XS4thJ_-GCnJzS62DSipiaqOA23z44CkDtxczWEQ64Ihbjh0ICkGFTMHujCnJSVI-zZcPYmlxIzCwdEvNFgSr8Ej0aLSN45Ip6BzsmhzEqkGZMrdHii7luiHU3GUcHb83BrOluau6n3U52Dwscyo8?purpose=fullsize",
    ],
  },
  {
    keywords: ["data base management"],
    images: [
      "https://images.openai.com/static-rsc-4/l-29OL3ikdOOfYlvU5dm-pDYWKSZXm12BXh_g4XW5kOIdIpK6E8UDW1rysPq900sBCRN_8B5VpFF4ugndzHtNObIo5llLkks8ox2fjoMeUJ0H_ALztGcTbeoLIy0neJc56TmWFLy825TZMNhK-SI-mbej2YGJXE8PyYYx5eP1F86Qj8hygtlnuWo5mMtkWml?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/l-29OL3ikdOOfYlvU5dm-pDYWKSZXm12BXh_g4XW5kOIdIpK6E8UDW1rysPq900sBCRN_8B5VpFF4ugndzHtNObIo5llLkks8ox2fjoMeUJ0H_ALztGcTbeoLIy0neJc56TmWFLy825TZMNhK-SI-mbej2YGJXE8PyYYx5eP1F86Qj8hygtlnuWo5mMtkWml?purpose=fullsize",
    ],
  },
  {
    keywords: ["enterprise software solution"],
    images: [
      "https://images.openai.com/static-rsc-4/zW01b5__cYNSssCqiD2LwmrTJINBOcvHG0XDl_vkeK91cNCA3alKQzSQeiEiAP6nWS33PHRhSa-hnI8PIzNszNTwB5ESe3CBWU7GV4TCG-19LZ1gf1IDmrRLxPy94TefBozQu8vAW1LJ0GZF8F01ZjSdIQzR6vw3P4whCApSggDsctKbEIgFl6Y0zKzc3gfb?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/zW01b5__cYNSssCqiD2LwmrTJINBOcvHG0XDl_vkeK91cNCA3alKQzSQeiEiAP6nWS33PHRhSa-hnI8PIzNszNTwB5ESe3CBWU7GV4TCG-19LZ1gf1IDmrRLxPy94TefBozQu8vAW1LJ0GZF8F01ZjSdIQzR6vw3P4whCApSggDsctKbEIgFl6Y0zKzc3gfb?purpose=fullsize",
    ],
  },
  {
    keywords: ["admin dashboards"],
    images: [
      "https://images.openai.com/static-rsc-4/jt4E2thAuuZ3Q1-cPlFwRpPgf9DYdD58il_X1rNhLDEthAGj8hybA0E8XLquFntoBYKRMkvziQh3JXp7_BBEd63IvctWX2Xzm2hDTBHpeR8wY3ge_9I5htYZ32jpto2x6JBWsmwMZ5nwOipRebi0nBVuW6-KLwKKZKK8sNTDWDqiOWBz8z1dnburKhF9kMuy?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/jt4E2thAuuZ3Q1-cPlFwRpPgf9DYdD58il_X1rNhLDEthAGj8hybA0E8XLquFntoBYKRMkvziQh3JXp7_BBEd63IvctWX2Xzm2hDTBHpeR8wY3ge_9I5htYZ32jpto2x6JBWsmwMZ5nwOipRebi0nBVuW6-KLwKK8sNTDWDqiOWBz8z1dnburKhF9kMuy?purpose=fullsize",
    ],
  },
  {
    keywords: ["landing page"],
    images: [
      "https://images.openai.com/static-rsc-4/xzcE4HBNpExr9JBJ9yf_I0pnm89pcq2Gkqk25hhhsbCIttOLopCG_EECboY8SOZYjdCSA7d-9Sgqxn5rwwZ6lkzs8LG1XVdwd2RbQkOGuQfxZc_ufyK7rvC_DF6Ev4hmSzUCgZADOACjdq_pUq0TzJAAsqDA4MNelyNRoss7V6ZHnq-oQsAihmUXvcOXPiIH?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/xzcE4HBNpExr9JBJ9yf_I0pnm89pcq2Gkqk25hhhsbCIttOLopCG_EECboY8SOZYjdCSA7d-9Sgqxn5rwwZ6lkzs8LG1XVdwd2RbQkOGuQfxZc_ufyK7rvC_DF6Ev4hmSzUCgZADOACjdq_pUq0TzJAAsqDA4MNelyNRoss7V6ZHnq-oQsAihmUXvcOXPiIH?purpose=fullsize",
    ],
  },
  {
    keywords: ["video  editing"],
    images: [
      "https://images.openai.com/static-rsc-4/1R-952ilLgKyJZ8unZ02N4_YcE0-4BU0VJ_sFuCr6vFDyNuld4HRWbborYXzPM9NQwtlKsjc1TvpIpz-kXn23RmJQa0uqpZ10XQvhCk3tfn_h3a1QLOtXkhRnPWktm9kKkSA1a50ErUmIYO4HXVLvJ4LupeLQVt_K6C5vCVL5mdp4KjhQKk6PkCoYf-PR3DH?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/1R-952ilLgKyJZ8unZ02N4_YcE0-4BU0VJ_sFuCr6vFDyNuld4HRWbborYXzPM9NQwtlKsjc1TvpIpz-kXn23RmJQa0uqpZ10XQvhCk3tfn_h3a1QLOtXkhRnPWktm9kKkSA1a50ErUmIYO4HXVLvJ4LupeLQVt_K6C5vCVL5mdp4KjhQKk6PkCoYf-PR3DH?purpose=fullsize",
    ],
  },
  {
    keywords: ["website maintenence "],
    images: [
      "https://images.openai.com/static-rsc-4/UC1rA54wdIL2bsbnuulcoCZbOkssfuJAbUIEZcD-Ee-2WVL1GUeK8mri7Xp6GOlLmxajdus35InWDhj9lqWLVJLQVNpZtgmYfnJuakd5GOgFGREs12zDGyQxR54_QDIg8Y1fijdmoFZEZtMCkq5ISFxiwbyUiBFwnIo2nlR5gxrxCK0IdH8vNYnMDlPlnqdq?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/UC1rA54wdIL2bsbnuulcoCZbOkssfuJAbUIEZcD-Ee-2WVL1GUeK8mri7Xp6GOlLmxajdus35InWDhj9lqWLVJLQVNpZtgmYfnJuakd5GOgFGREs12zDGyQxR54_QDIg8Y1fijdmoFZEZtMCkq5ISFxiwbyUiBFwnIo2nlR5gxrxCK0IdH8vNYnMDlPlnqdq?purpose=fullsize",
    ],
  },
  {
    keywords: ["digital marketing"],
    images: [
      "https://images.openai.com/static-rsc-4/9w1AMM3F0qnybdYigCp-TCWk0DQL5CoxdZiQynWi21-zctUsTohISd-72haJT-DE0YnbohT2UbIK9Q0GQCg5TY83ePVgirTzEe6fQGbOJOoxhRXwxI6SjNLuPXXMtZyhKt3MWX2qtVp11RG_nRK8B8T5kzsWfgPCIq6qd3lKXJmX3GBxRuOnGaWfVVC5IQgJ?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/9w1AMM3F0qnybdYigCp-TCWk0DQL5CoxdZiQynWi21-zctUsTohISd-72haJT-DE0YnbohT2UbIK9Q0GQCg5TY83ePVgirTzEe6fQGbOJOoxhRXwxI6SjNLuPXXMtZyhKt3MWX2qtVp11RG_nRK8B8T5kzsWfgPCIq6qd3lKXJmX3GBxRuOnGaWfVVC5IQgJ?purpose=fullsize",
    ],
  },
  {
    keywords: ["brand identity"],
    images: [
      "https://images.openai.com/static-rsc-4/42Tvx4Df9ez5VTlBmHIt5nnnS-N9DVH3gNXr6sffoenuLnj8MmcK2ZA519G6VNCqtoQ-HYa2se0G62jcy-Jyd0I5ZWGNcxkkbuJ0g_nQ9VUwVFkuv9fRpIbHH1fzj6RB5ptAMBGAbUi93he2ZlGJg0fGCDLpVZH4QgjDYcdMNADjmSJKlfc3qQu-zF8UmEwu?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/42Tvx4Df9ez5VTlBmHIt5nnnS-N9DVH3gNXr6sffoenuLnj8MmcK2ZA519G6VNCqtoQ-HYa2se0G62jcy-Jyd0I5ZWGNcxkkbuJ0g_nQ9VUwVFkuv9fRpIbHH1fzj6RB5ptAMBGAbUi93he2ZlGJg0fGCDLpVZH4QgjDYcdMNADjmSJKlfc3qQu-zF8UmEwu?purpose=fullsize",
    ],
  },
  {
    keywords: ["motion graphic"],
    images: [
      "https://images.openai.com/static-rsc-4/U2t9wCHzUU7W7KoSu1W67zpInIBrgsJDIAnOsljQ1unrSDNJxrTPN12cso3nzF8M4H7aeedIZ7ELghjlbgl9bQNyuI98EYUQOmpB3YOE2zsF0NtyLMWU1Pb-6QT5nHwpozzf5qe_R418ZT7ZOfaVhoh55y5Kq2TxIZHuNMEucnhHh0g-pPxd3dEgKUPWCMNk?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/U2t9wCHzUU7W7KoSu1W67zpInIBrgsJDIAnOsljQ1unrSDNJxrTPN12cso3nzF8M4H7aeedIZ7ELghjlbgl9bQNyuI98EYUQOmpB3YOE2zsF0NtyLMWU1Pb-6QT5nHwpozzf5qe_R418ZT7ZOfaVhoh55y5Kq2TxIZHuNMEucnhHh0g-pPxd3dEgKUPWCMNk?purpose=fullsize",
    ],
  },
  {
    keywords: ["content  writing"],
    images: [
      "https://images.openai.com/static-rsc-4/U2t9wCHzUU7W7KoSu1W67zpInIBrgsJDIAnOsljQ1unrSDNJxrTPN12cso3nzF8M4H7aeedIZ7ELghjlbgl9bQNyuI98EYUQOmpB3YOE2zsF0NtyLMWU1Pb-6QT5nHwpozzf5qe_R418ZT7ZOfaVhoh55y5Kq2TxIZHuNMEucnhHh0g-pPxd3dEgKUPWCMNk?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/U2t9wCHzUU7W7KoSu1W67zpInIBrgsJDIAnOsljQ1unrSDNJxrTPN12cso3nzF8M4H7aeedIZ7ELghjlbgl9bQNyuI98EYUQOmpB3YOE2zsF0NtyLMWU1Pb-6QT5nHwpozzf5qe_R418ZT7ZOfaVhoh55y5Kq2TxIZHuNMEucnhHh0g-pPxd3dEgKUPWCMNk?purpose=fullsize",
    ],
  },
  {
    keywords: ["graphic design"],
    images: [
      "https://images.openai.com/static-rsc-4/XiUWMifKur_tw0iPxpOC2gJDsrjiwG5fMeJz7cfofpwolpUS7Vg2roVNecRi4uSkL-NV6qndBnXSbwab4RDoOh0zWdcEt55R0FngKt_VDaxSHUkCx_umAFWCjt8X4vnweYdCVG1p5hkqHo3ur_faDt0zrM0_6lVWvjaeFyqcoVW-KmQrtGga0Iz6EbvWDK4k?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/XiUWMifKur_tw0iPxpOC2gJDsrjiwG5fMeJz7cfofpwolpUS7Vg2roVNecRi4uSkL-NV6qndBnXSbwab4RDoOh0zWdcEt55R0FngKt_VDaxSHUkCx_umAFWCjt8X4vnweYdCVG1p5hkqHo3ur_faDt0zrM0_6lVWvjaeFyqcoVW-KmQrtGga0Iz6EbvWDK4k?purpose=fullsize",
    ],
  },
  {
    keywords: ["content creation"],
    images: [
      "https://images.openai.com/static-rsc-4/vsQqhQmdw6jD7aDHpfpI-Mi94-TmlrsifAQBloL_uFM-IjQkBSkKEHI1TkkMr4N0EzYMklM19nF26Pvb9F-lGVaxCgPBGgpeT_LOTxQ-dNg-SAt4mIa8Gn8ZM9OCgGnSuuqPwx-ZtNfOC59NQOcpyjofj01pE9qUNjjuV4UTLHsDfnQndqRQ_CzVU2HGy1-P?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/vsQqhQmdw6jD7aDHpfpI-Mi94-TmlrsifAQBloL_uFM-IjQkBSkKEHI1TkkMr4N0EzYMklM19nF26Pvb9F-lGVaxCgPBGgpeT_LOTxQ-dNg-SAt4mIa8Gn8ZM9OCgGnSuuqPwx-ZtNfOC59NQOcpyjofj01pE9qUNjjuV4UTLHsDfnQndqRQ_CzVU2HGy1-P?purpose=fullsize",
    ],
  },
  {
    keywords: ["enterprise solutions"],
    images: [
      "https://images.openai.com/static-rsc-4/mOE2J0_PApLqRJ6JJuYnBMdMnJqrcb1OYVCNz3BZUw12a-SN2QbbLDzXrJDEvNwPc3hrMaj8WQWlRb7E0TSOROFz7l32uETnvYkLDbrR3qCSAnOy4RPJrg3OkBDOWAbXpcQd4iCEL_pc4PGZJ9GA-OY2dhw3Stv7Fhm-PHpE-DhLMsFpb9svtnLQaBbvBhGa?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/mOE2J0_PApLqRJ6JJuYnBMdMnJqrcb1OYVCNz3BZUw12a-SN2QbbLDzXrJDEvNwPc3hrMaj8WQWlRb7E0TSOROFz7l32uETnvYkLDbrR3qCSAnOy4RPJrg3OkBDOWAbXpcQd4iCEL_pc4PGZJ9GA-OY2dhw3Stv7Fhm-PHpE-DhLMsFpb9svtnLQaBbvBhGa?purpose=fullsize",
    ],
  },
  {
    keywords: ["software testing"],
    images: [
      "https://images.openai.com/static-rsc-4/QxJCscQDLyyULaDj2fPoGpofIjjM1AWZg1IkzIO5gHp50YdFZ68MVkfoVbWoya5Tc9qe2SROMFv2VN0d9CnyTgJiuYp4vHRhNDsFzAhry9iRK9a4zEuekJbTuYY_TpfcBLGgI96wlQxc3WHiFkTSxY3rj7T81RxHzK-qW7zLChNulDVdeP_hYQb7T3atCfFp?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/QxJCscQDLyyULaDj2fPoGpofIjjM1AWZg1IkzIO5gHp50YdFZ68MVkfoVbWoya5Tc9qe2SROMFv2VN0d9CnyTgJiuYp4vHRhNDsFzAhry9iRK9a4zEuekJbTuYY_TpfcBLGgI96wlQxc3WHiFkTSxY3rj7T81RxHzK-qW7zLChNulDVdeP_hYQb7T3atCfFp?purpose=fullsize",
    ],
  },
  {
    keywords: ["technology consulting"],
    images: [
      "https://images.openai.com/static-rsc-4/MnBnM4OI0_ejVJEHKH6Dw2faCZVIX6YWmT2x805o7iuQ-z1c_gY80G-YhjGhTulR85toX2oRWzZBqPd_hAq4ya8VamQ9opp6zGxr045sP3wrnMdrOGr_PuSpvKgpfZfxI_F4gmqZTPnWn2LJNSB8Cu3rh-DaymhM9taiOzJeIzwMD02dpxzYMB5urLfQV1R0?purpose=fullsize",
      "https://images.openai.com/static-rsc-4/MnBnM4OI0_ejVJEHKH6Dw2faCZVIX6YWmT2x805o7iuQ-z1c_gY80G-YhjGhTulR85toX2oRWzZBqPd_hAq4ya8VamQ9opp6zGxr045sP3wrnMdrOGr_PuSpvKgpfZfxI_F4gmqZTPnWn2LJNSB8Cu3rh-DaymhM9taiOzJeIzwMD02dpxzYMB5urLfQV1R0?purpose=fullsize",
    ],
  },
];

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85";

function getServiceImages(service, index = 0) {
  const title = cleanText(service?.title);

  const body = cleanText(
    service?.body ||
      service?.description ||
      service?.content
  );

  const benefits = Array.isArray(service?.benefits)
    ? service.benefits.map(cleanText).join(" ")
    : cleanText(service?.benefits);

  const text = `${title} ${body} ${benefits}`;

  const category = SERVICE_IMAGE_CATEGORIES.find((item) =>
    item.keywords.some((keyword) => {
      const normalizedKeyword = cleanText(keyword);

      return (
        title.includes(normalizedKeyword) ||
        text.includes(normalizedKeyword)
      );
    })
  );

  if (!category?.images?.length) {
    return [FALLBACK_IMAGE];
  }

  return category.images.filter(Boolean);
}

/* ================================================================
   SERVICE IMAGE
================================================================ */

function ServiceImage({
  service,
  index,
  isActive,
}) {
  const [loaded, setLoaded] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const imageUrls = useMemo(
    () => getServiceImages(service, index),
    [service, index]
  );

  useEffect(() => {
    setLoaded(false);
    setImageIndex(0);
  }, [service, index]);

  const currentImage =
    imageUrls[imageIndex] || FALLBACK_IMAGE;

  const handleImageError = () => {
    if (imageIndex < imageUrls.length - 1) {
      setLoaded(false);
      setImageIndex((current) => current + 1);
      return;
    }

    if (currentImage !== FALLBACK_IMAGE) {
      setLoaded(false);
      setImageIndex(imageUrls.length);
    }
  };

  const finalImage =
    imageIndex >= imageUrls.length
      ? FALLBACK_IMAGE
      : currentImage;

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#071326]">
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,.22),transparent_45%),linear-gradient(135deg,#071326,#020712)]
        "
      />

      {!loaded && (
        <div className="absolute inset-0 z-20 overflow-hidden">
          <motion.div
            className="
              absolute inset-y-0
              left-[-70%]
              w-[45%]
              skew-x-[-18deg]
              bg-gradient-to-r
              from-transparent
              via-white/[0.08]
              to-transparent
            "
            animate={{
              left: ["-70%", "150%"],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      )}

      <motion.img
        key={finalImage}
        src={finalImage}
        alt={
          service?.title
            ? `${service.title} service`
            : "DesFlyer service"
        }
        loading={index < 6 ? "eager" : "lazy"}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={handleImageError}
        initial={{
          opacity: 0,
          scale: 1.08,
        }}
        animate={{
          opacity: loaded ? 1 : 0,
          scale: isActive ? 1 : 1.045,
        }}
        transition={{
          opacity: {
            duration: 0.55,
          },
          scale: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        className="
          absolute inset-0
          h-full w-full
          object-cover
        "
      />

      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-br
          from-[#020914]/55
          via-[#020914]/10
          to-[#020914]/90
        "
      />

      <div
        className="
          pointer-events-none absolute
          inset-x-0 bottom-0
          h-[75%]
          bg-gradient-to-t
          from-[#020914]
          via-[#020914]/55
          to-transparent
        "
      />

      <motion.div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-br
          from-blue-950/25
          via-transparent
          to-cyan-950/20
        "
        animate={{
          opacity: isActive
            ? [0.25, 0.5, 0.25]
            : 0.2,
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        className="
          pointer-events-none absolute inset-0
          opacity-[0.055]
          mix-blend-overlay
          [background-image:radial-gradient(rgba(255,255,255,.55)_0.6px,transparent_0.6px)]
          [background-size:4px_4px]
        "
      />
    </div>
  );
}

/* ================================================================
   SERVICE CARD
================================================================ */

function ServiceTile({
  service,
  index,
  isActive,
  onSelect,
}) {
  const cardRef = useRef(null);

  const touchStartRef = useRef({
    x: 0,
    y: 0,
  });

  const [ripples, setRipples] = useState([]);

  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);

  const rotateX = useSpring(rawRotateX, {
    stiffness: 220,
    damping: 22,
  });

  const rotateY = useSpring(rawRotateY, {
    stiffness: 220,
    damping: 22,
  });

  const spotlight = useMotionTemplate`
    radial-gradient(
      420px circle at ${mouseX}px ${mouseY}px,
      rgba(37,99,235,0.24),
      transparent 68%
    )
  `;

  const handleMouseMove = (event) => {
    if (shouldReduceMotion) return;

    const rect =
      cardRef.current?.getBoundingClientRect();

    if (!rect) return;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    rawRotateY.set(
      ((x / rect.width) - 0.5) *
        (isActive ? 2.5 : 6)
    );

    rawRotateX.set(
      ((y / rect.height) - 0.5) *
        (isActive ? -2.5 : -6)
    );
  };

  const handleMouseLeave = () => {
    rawRotateX.set(0);
    rawRotateY.set(0);
  };

  const handleTouchStart = (event) => {
    if (!event.touches?.length) return;

    const touch = event.touches[0];

    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  };

  const handleClick = (event) => {
    const rect =
      cardRef.current?.getBoundingClientRect();

    if (rect) {
      const touch =
        event.changedTouches?.[0];

      const clientX =
        event.clientX ??
        touch?.clientX ??
        rect.left + rect.width / 2;

      const clientY =
        event.clientY ??
        touch?.clientY ??
        rect.top + rect.height / 2;

      const ripple = {
        id: Date.now() + Math.random(),
        x: clientX - rect.left,
        y: clientY - rect.top,
      };

      setRipples((current) => [
        ...current,
        ripple,
      ]);

      window.setTimeout(() => {
        setRipples((current) =>
          current.filter(
            (item) => item.id !== ripple.id
          )
        );
      }, 650);
    }

    onSelect(index);
  };

  const handleTouchEnd = (event) => {
    if (!event.changedTouches?.length) return;

    const touch = event.changedTouches[0];

    const deltaX =
      touch.clientX -
      touchStartRef.current.x;

    const deltaY =
      touch.clientY -
      touchStartRef.current.y;

    if (
      Math.abs(deltaX) > 60 &&
      Math.abs(deltaX) > Math.abs(deltaY)
    ) {
      return;
    }

    handleClick(event);
  };

  return (
    <motion.button
      ref={cardRef}
      layout
      layoutId={`service-${service.slug || index}`}
      data-service-index={index}
      type="button"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      whileHover={
        isActive || shouldReduceMotion
          ? {}
          : { y: -5 }
      }
      whileTap={
        shouldReduceMotion
          ? {}
          : { scale: 0.98 }
      }
      transition={{
        layout: {
          duration: shouldReduceMotion
            ? 0
            : 0.8,
          ease: [0.16, 1, 0.3, 1],
        },
        opacity: {
          duration: shouldReduceMotion
            ? 0
            : 0.5,
          delay: shouldReduceMotion
            ? 0
            : index * 0.02,
          ease: "easeOut",
        },
        y: {
          duration: shouldReduceMotion
            ? 0
            : 0.6,
          delay: shouldReduceMotion
            ? 0
            : index * 0.02,
          ease: [0.16, 1, 0.3, 1],
        },
        scale: {
          duration: shouldReduceMotion
            ? 0
            : 0.2,
          ease: "easeOut",
        },
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        touchAction: "manipulation",
      }}
      className={`
        group
        relative
        min-w-0
        overflow-hidden
        rounded-2xl
        border
        text-left
        sm:rounded-3xl

        ${
          isActive
            ? `
              col-span-2
              row-span-2
              min-h-[300px]
              border-blue-400/45
              bg-[#07162c]
              shadow-[0_25px_90px_-25px_rgba(0,80,255,0.48)]
              max-sm:min-h-[280px]
            `
            : `
              col-span-1
              row-span-1
              min-h-[135px]
              border-white/[0.08]
              bg-[#050f20]
              shadow-[0_12px_35px_-18px_rgba(0,40,120,0.7)]
              hover:border-blue-400/30
              hover:shadow-[0_18px_50px_-18px_rgba(0,80,255,0.35)]
            `
        }
      `}
    >
      <ServiceImage
        service={service}
        index={index}
        isActive={isActive}
      />

      <motion.div
        className="
          pointer-events-none absolute inset-0 z-[3]
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
        style={{
          background: spotlight,
        }}
      />

      {isActive && !shouldReduceMotion && (
        <>
          <motion.div
            className="
              pointer-events-none absolute
              -left-24 -top-24 z-[3]
              h-72 w-72 rounded-full
              bg-blue-500/[0.18]
              blur-[100px]
            "
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
              opacity: [0.35, 0.7, 0.35],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="
              pointer-events-none absolute
              -bottom-24 -right-24 z-[3]
              h-72 w-72 rounded-full
              bg-cyan-400/[0.12]
              blur-[100px]
            "
            animate={{
              x: [0, -25, 0],
              y: [0, -15, 0],
              opacity: [0.25, 0.6, 0.25],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="
              pointer-events-none absolute z-30
              rounded-full bg-blue-300/20
            "
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 12,
              height: 12,
              marginLeft: -6,
              marginTop: -6,
            }}
            initial={{
              scale: 0,
              opacity: 0.75,
            }}
            animate={{
              scale: 14,
              opacity: 0,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>

      <div
        className="
          pointer-events-none absolute
          inset-x-0 top-0 z-[4]
          h-1/2
          bg-gradient-to-b
          from-white/[0.07]
          to-transparent
        "
      />

      <span
        className="
          absolute left-4 top-4 z-10
          font-mono text-[7px]
          tracking-[0.25em]
          text-white/55
          sm:left-5 sm:top-5 sm:text-[8px]
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {isActive && (
        <div
          className="
            pointer-events-none absolute inset-0 z-20
            rounded-2xl p-px
            sm:rounded-3xl
            [background:linear-gradient(135deg,rgba(59,130,246,0.7),transparent_35%,transparent_65%,rgba(34,211,238,0.45))]
            [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
            [-webkit-mask-composite:xor]
            [mask-composite:exclude]
          "
        />
      )}

      <AnimatePresence mode="wait">
        {isActive ? (
          <motion.div
            key="active"
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : -8,
            }}
            transition={{
              duration: shouldReduceMotion
                ? 0
                : 0.35,
            }}
            className="
              relative z-10
              flex h-full min-h-[300px]
              flex-col justify-end
              p-5 sm:p-7 lg:p-9
            "
          >
            <div className="relative z-10">
              <div
                className="
                  mb-3 flex items-center gap-2
                  font-mono text-[7px]
                  uppercase tracking-[0.25em]
                  text-blue-300/80
                  sm:text-[8px]
                "
              >
                <motion.span
                  className="
                    h-1.5 w-1.5 rounded-full
                    bg-blue-400
                    shadow-[0_0_12px_#3b82f6]
                  "
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                />

                DES / CAPABILITY /{" "}
                {String(index + 1).padStart(2, "0")}
              </div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 85 }}
                transition={{
                  duration: shouldReduceMotion
                    ? 0
                    : 0.6,
                  delay: 0.1,
                }}
                className="
                  mb-4 h-px
                  bg-gradient-to-r
                  from-blue-400
                  via-cyan-300
                  to-transparent
                "
              />

              <motion.h3
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: shouldReduceMotion
                    ? 0
                    : 0.12,
                  duration: shouldReduceMotion
                    ? 0
                    : 0.4,
                }}
                className="
                  max-w-[850px]
                  break-words
                  text-xl
                  font-semibold
                  leading-[0.98]
                  tracking-[-0.04em]
                  text-white
                  sm:text-2xl
                  md:text-3xl
                  lg:text-4xl
                "
                style={{
                  fontFamily:
                    '"Chakra Petch", sans-serif',
                }}
              >
                {service.title}
              </motion.h3>

              <motion.p
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: shouldReduceMotion
                    ? 0
                    : 0.2,
                  duration: shouldReduceMotion
                    ? 0
                    : 0.4,
                }}
                className="
                  mt-3 max-w-3xl
                  break-words
                  text-[10px]
                  leading-6
                  text-slate-200/85
                  sm:mt-4
                  sm:text-xs
                  md:text-sm
                "
              >
                {service.body ||
                  service.description ||
                  service.content}
              </motion.p>

              {Array.isArray(service.benefits) &&
                service.benefits.length > 0 && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: shouldReduceMotion
                        ? 0
                        : 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: shouldReduceMotion
                        ? 0
                        : 0.28,
                      duration: shouldReduceMotion
                        ? 0
                        : 0.4,
                    }}
                    className="
                      mt-4 flex max-w-3xl
                      flex-wrap gap-1.5
                      sm:mt-5 sm:gap-2
                    "
                  >
                    {service.benefits
                      .slice(0, 3)
                      .map((benefit) => (
                        <div
                          key={String(benefit)}
                          className="
                            flex min-w-0 max-w-full
                            items-center gap-1.5
                            rounded-full border
                            border-blue-300/20
                            bg-blue-500/[0.08]
                            px-2 py-1
                            backdrop-blur-md
                            sm:px-2.5 sm:py-1.5
                          "
                        >
                          <FiCheck
                            size={9}
                            className="
                              shrink-0 text-blue-300
                            "
                          />

                          <span
                            className="
                              max-w-[150px]
                              truncate text-[7px]
                              text-slate-200
                              sm:max-w-none
                              sm:text-[9px]
                            "
                          >
                            {benefit}
                          </span>
                        </div>
                      ))}
                  </motion.div>
                )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="inactive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              relative z-10
              flex h-full min-h-[135px]
              flex-col justify-end
              p-3 sm:p-5 lg:p-6
            "
          >
            <div className="relative z-10">
              <span
                className="
                  block max-w-[88%]
                  break-words
                  text-[10px]
                  font-semibold
                  leading-[1.15]
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-blue-200
                  sm:text-xs
                  md:text-sm
                "
                style={{
                  fontFamily:
                    '"Chakra Petch", sans-serif',
                }}
              >
                {service.title}
              </span>

              <div
                className="
                  mt-2 h-px w-7
                  bg-gradient-to-r
                  from-blue-400
                  to-transparent
                  transition-all duration-500
                  group-hover:w-14
                "
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isActive && (
        <motion.div
          className="
            absolute inset-x-0 bottom-0 z-30
            h-[2px]
            origin-left
            bg-gradient-to-r
            from-blue-500
            via-cyan-300
            to-blue-600
          "
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: shouldReduceMotion
              ? 0
              : 0.7,
          }}
        />
      )}

      {!isActive && (
        <div
          className="
            pointer-events-none absolute
            inset-x-0 bottom-0 z-20
            h-px
            origin-center
            scale-x-0
            bg-gradient-to-r
            from-transparent
            via-blue-400
            to-transparent
            transition-transform duration-500
            group-hover:scale-x-100
          "
        />
      )}
    </motion.button>
  );
}

/* ================================================================
   MAIN SERVICES PAGE
================================================================ */

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const [viewportWidth, setViewportWidth] =
    useState(
      typeof window !== "undefined"
        ? window.innerWidth
        : 1280
    );

  const touchStartRef = useRef({
    x: 0,
    y: 0,
  });

  const allServices = useMemo(
    () => services || [],
    []
  );

  /* ==============================================================
     RESIZE
  ============================================================== */

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* ==============================================================
     RESET SCROLL
  ============================================================== */

  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const previousRestoration =
      window.history.scrollRestoration;

    try {
      window.history.scrollRestoration =
        "manual";
    } catch {}

    const scrollTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    };

    scrollTop();

    const frame =
      window.requestAnimationFrame(() => {
        scrollTop();

        window.setTimeout(
          scrollTop,
          0
        );
      });

    return () => {
      window.cancelAnimationFrame(frame);

      try {
        window.history.scrollRestoration =
          previousRestoration;
      } catch {}
    };
  }, []);

  /* ==============================================================
     SELECT
  ============================================================== */

  const selectService = (index) => {
    if (!allServices.length) return;

    setActiveIndex(index);
  };

  /* ==============================================================
     NEXT
  ============================================================== */

  const nextService = () => {
    if (!allServices.length) return;

    setActiveIndex((current) => {
      if (current === null) return 0;

      return current >= allServices.length - 1
        ? 0
        : current + 1;
    });
  };

  /* ==============================================================
     PREVIOUS
  ============================================================== */

  const previousService = () => {
    if (!allServices.length) return;

    setActiveIndex((current) => {
      if (current === null) {
        return allServices.length - 1;
      }

      return current === 0
        ? allServices.length - 1
        : current - 1;
    });
  };

  /* ==============================================================
     KEYBOARD
  ============================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target;

      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        target?.isContentEditable
      ) {
        return;
      }

      if (
        event.key === "ArrowRight" ||
        event.key === "ArrowDown"
      ) {
        event.preventDefault();
        nextService();
      }

      if (
        event.key === "ArrowLeft" ||
        event.key === "ArrowUp"
      ) {
        event.preventDefault();
        previousService();
      }

      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [allServices.length]);

  /* ==============================================================
     GRID SWIPE
  ============================================================== */

  const handleGridTouchStart = (event) => {
    if (!event.touches?.length) return;

    const touch = event.touches[0];

    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  };

  const handleGridTouchEnd = (event) => {
    if (!event.changedTouches?.length) {
      return;
    }

    const touch = event.changedTouches[0];

    const deltaX =
      touch.clientX -
      touchStartRef.current.x;

    const deltaY =
      touch.clientY -
      touchStartRef.current.y;

    if (
      Math.abs(deltaX) < 60 ||
      Math.abs(deltaX) <= Math.abs(deltaY)
    ) {
      return;
    }

    if (deltaX < 0) {
      nextService();
    } else {
      previousService();
    }
  };

  /* ==============================================================
     SCROLL TO GRID
  ============================================================== */

  const scrollToServices = () => {
    const grid =
      document.getElementById(
        "services-grid"
      );

    if (!grid) return;

    grid.scrollIntoView({
      behavior: "smooth",
      block:
        viewportWidth < 768
          ? "start"
          : "center",
    });
  };

  if (!allServices.length) {
    return null;
  }

  return (
    <>
      <Seo
        title="Services"
        description="Custom software, web, mobile app development, UI/UX design, branding, AI, digital marketing and digital experiences from DesFlyer."
        path="/services"
      />

      {/* ==========================================================
          HERO
      ========================================================== */}

      <section
        className="
          relative
          min-h-[100svh]
          overflow-hidden
          bg-[#020712]
          px-4
          pb-12
          pt-24
          text-white
          sm:px-6
          sm:pt-28
          lg:px-10
          lg:pb-16
          lg:pt-24
        "
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src="/images/portfolio/serv.png"
            alt="DesFlyer Services"
            className="
              absolute inset-0
              h-full w-full
              scale-[1.02]
              object-cover
              object-center
            "
          />

          <div
            className="
              absolute inset-x-0 bottom-0
              h-10
              bg-gradient-to-t
              from-[#05070c]
              to-transparent
            "
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-[#020712]/90
              via-[#020712]/55
              to-[#020712]/25
              lg:from-[#020712]/82
              lg:via-[#020712]/40
              lg:to-transparent
            "
          />

          <motion.div
            className="
              absolute left-[-10%]
              top-[15%]
              h-px
              w-[55%]
              rotate-[-12deg]
              bg-gradient-to-r
              from-transparent
              via-blue-400/50
              to-transparent
            "
            animate={{
              x: [
                "-10%",
                "100%",
                "-10%",
              ],
              opacity: [
                0.1,
                0.8,
                0.1,
              ],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* ========================================================
            HERO CONTENT

            MOBILE:
            - centered
            - compact spacing
            - no left offset

            DESKTOP:
            - original left positioning
            - original spacing
        ======================================================== */}

        <div
          className="
            relative z-10
            mx-auto
            flex
            min-h-[calc(100svh-9rem)]
            max-w-[1400px]
            items-center

            max-sm:justify-center
            max-sm:text-center
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              relative
              w-full
              max-w-[760px]

              max-sm:mx-auto
              max-sm:max-w-[390px]
              max-sm:pl-0

              sm:-left-14
              lg:ml-8
              xl:ml-14
            "
          >
            {/* DESKTOP SIDE LINE */}

            <div
              className="
                absolute
                -left-8
                top-0
                hidden
                h-full
                w-px
                bg-gradient-to-b
                from-transparent
                via-blue-500/60
                to-transparent
                lg:block
              "
            />

            {/* EYEBROW */}

            <div className="max-sm:flex max-sm:justify-center">
              <Eyebrow>
                What We Do
              </Eyebrow>
            </div>

            {/* TITLE */}

            <div
              className="
                relative
                mt-5
                max-sm:mt-4
              "
            >
              <motion.div
                className="
                  pointer-events-none
                  absolute
                  top-1/2
                  h-[200px]
                  w-[430px]
                  -translate-y-1/2
                  rounded-full
                  bg-blue-500/[0.09]
                  blur-[90px]
                  sm:h-[280px]
                  sm:w-[620px]
                  sm:blur-[120px]
                  max-sm:left-1/2
                  max-sm:-translate-x-1/2
                  max-sm:w-[300px]
                "
                animate={{
                  scale: [
                    0.9,
                    1.08,
                    0.9,
                  ],
                  opacity: [
                    0.15,
                    0.35,
                    0.15,
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <h1
                className="
                  relative
                  max-w-[760px]
                  text-4xl
                  font-semibold
                  leading-[0.88]
                  tracking-[-0.055em]

                  max-sm:text-[3rem]
                  max-sm:leading-[0.9]

                  sm:text-5xl
                  md:text-6xl
                  lg:text-[4.8rem]
                  xl:text-[5.2rem]
                "
                style={{
                  fontFamily:
                    '"Chakra Petch", sans-serif',
                }}
              >
                Make your brand
                <br />

                <motion.span
                  className="
                    inline-block
                    bg-gradient-to-r
                    from-blue-400
                    via-cyan-300
                    to-white
                    bg-clip-text
                    text-transparent
                  "
                  animate={{
                    backgroundPosition: [
                      "0% 50%",
                      "100% 50%",
                      "0% 50%",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize:
                      "200% 200%",
                  }}
                >
                  impossible to ignore.
                </motion.span>
              </h1>

              {/* CENTERED MOBILE LINE */}

              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                animate={{
                  width: 160,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                }}
                className="
                  mt-5
                  h-px
                  bg-gradient-to-r
                  from-blue-500
                  via-cyan-300
                  to-transparent

                  max-sm:mx-auto
                  max-sm:mt-4
                "
              />
            </div>

            {/* DESCRIPTION */}

            <p
              className="
                mt-6
                max-w-xl
                text-xs
                leading-6
                text-slate-400

                max-sm:mx-auto
                max-sm:mt-4
                max-sm:max-w-[340px]
                max-sm:text-[11px]
                max-sm:leading-5

                sm:text-sm
                sm:leading-7
                md:text-base
              "
            >
              Every service we offer, laid out
              at once. Pick one to open it up —
              the rest quietly make room.
            </p>

            {/* CATEGORY PILLS */}

            <div
              className="
                mt-5
                flex
                flex-wrap
                gap-2

                max-sm:mt-4
                max-sm:justify-center
                max-sm:gap-1.5
              "
            >
              {[
                "Web",
                "Mobile",
                "AI",
                "Product",
                "Brand",
                "UI / UX",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      0.45 +
                      index * 0.08,
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-blue-400/15
                    bg-[#06152a]/75
                    px-3
                    py-1.5
                    backdrop-blur-md

                    max-sm:px-2.5
                    max-sm:py-1
                  "
                >
                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-blue-400
                      shadow-[0_0_8px_#3b82f6]
                    "
                  />

                  <span
                    className="
                      font-mono
                      text-[7px]
                      uppercase
                      tracking-[0.2em]
                      text-white/45
                    "
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* SERVICE COUNT */}

            <div
              className="
                mt-5
                font-mono
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-slate-500

                max-sm:mt-4

                sm:text-[9px]
              "
            >
              <span className="text-blue-400">
                {allServices.length}
              </span>{" "}
              services / click any tile
            </div>

            {/* CTA */}

            <div
              className="
                max-sm:flex
                max-sm:justify-center
              "
            >
              <a
                href="#exp"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToServices();
                }}
              >
                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.03,
                    x: 4,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    group
                    relative
                    mt-6
                    overflow-hidden
                    rounded-xl
                    border
                    border-blue-500/30
                    bg-blue-500/[0.07]
                    px-4
                    py-3
                    backdrop-blur-md
                    transition-all
                    duration-500
                    hover:border-blue-400/70
                    hover:bg-blue-500/20
                    hover:shadow-[0_0_40px_rgba(37,99,235,0.18)]

                    max-sm:mt-4
                    max-sm:px-4
                    max-sm:py-2.5

                    sm:px-6
                    sm:py-3.5
                  "
                >
                  <motion.span
                    className="
                      absolute
                      inset-y-0
                      left-[-100%]
                      w-[60%]
                      skew-x-[-20deg]
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.14]
                      to-transparent
                    "
                    animate={{
                      left: [
                        "-100%",
                        "140%",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />

                  <span
                    className="
                      relative z-10
                      flex items-center
                      gap-4

                      max-sm:gap-3

                      sm:gap-6
                    "
                  >
                    <span className="flex flex-col items-start">
                      <span
                        className="
                          font-mono
                          text-[8px]
                          uppercase
                          tracking-[0.28em]
                          text-blue-400
                        "
                      >
                        Explore
                      </span>

                      <span
                        className="
                          mt-0.5
                          text-sm
                          font-semibold
                          tracking-wide
                          text-white

                          max-sm:text-xs
                        "
                        style={{
                          fontFamily:
                            '"Chakra Petch", sans-serif',
                        }}
                      >
                        All{" "}
                        {allServices.length}{" "}
                        Services
                      </span>
                    </span>

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-blue-400/30
                        bg-blue-500/10
                        text-blue-400

                        max-sm:h-8
                        max-sm:w-8
                      "
                    >
                      <FiArrowUpRight
                        size={15}
                      />
                    </span>
                  </span>
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================================
          SERVICES
      ========================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#030914]
          px-3
          pb-20
          pt-14
          text-white
          sm:px-6
          sm:pb-24
          sm:pt-16
          lg:px-8
          lg:pb-28
          lg:pt-24
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(96,165,250,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,.5)_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        <motion.div
          className="
            pointer-events-none
            absolute
            left-[-10%]
            top-[20%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-600/[0.05]
            blur-[130px]
          "
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            opacity: [
              0.3,
              0.6,
              0.3,
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            pointer-events-none
            absolute
            right-[-10%]
            top-[55%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-500/[0.04]
            blur-[120px]
          "
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
            opacity: [
              0.25,
              0.55,
              0.25,
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ========================================================
            IMPORTANT:
            Removed -mt-28 globally.

            Mobile no longer gets the huge negative overlap.
            Desktop also remains visually stable.
        ======================================================== */}

        <div
          className="
            relative
            mx-auto
            max-w-[1400px]
          "
          id="exp"
        >
          {/* HEADER */}

          <div
            className="
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div
              className="
                max-w-3xl

                max-sm:mt-0

                sm:mt-0
              "
            >
              <Eyebrow>
                Our Capabilities
              </Eyebrow>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="
                  mt-4
                  max-w-3xl
                  bg-gradient-to-r
                  from-white
                  via-blue-300
                  to-blue-500
                  bg-clip-text
                  text-3xl
                  font-semibold
                  leading-[0.94]
                  tracking-[-0.05em]
                  text-transparent
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                "
                style={{
                  fontFamily:
                    '"Chakra Petch", sans-serif',
                }}
              >
                Build Beyond the Expected
              </motion.h2>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-xs
                  leading-6
                  text-slate-400
                  sm:text-sm
                  sm:leading-7
                  md:text-base
                "
              >
                Explore our complete range of
                digital capabilities. Select any
                service to discover how we turn
                ideas into powerful, scalable,
                and meaningful digital experiences.
              </p>
            </div>

            <div
              className="
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-blue-400/10
                bg-blue-500/[0.03]
                px-3
                py-1.5
                font-mono
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-slate-500
              "
            >
              <motion.span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-blue-400
                "
                animate={{
                  opacity: [
                    1,
                    0.35,
                    1,
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />

              <span className="sm:hidden">
                Tap to explore
              </span>

              <span className="hidden sm:inline">
                Click to explore
              </span>
            </div>
          </div>

          {/* GRID */}

          <LayoutGroup>
            <div
              id="services-grid"
              onTouchStart={
                handleGridTouchStart
              }
              onTouchEnd={
                handleGridTouchEnd
              }
              className="
                mt-8
                grid
                auto-rows-[135px]
                grid-cols-2
                gap-2
                sm:mt-12
                sm:auto-rows-[155px]
                sm:grid-cols-4
                sm:gap-3
                lg:auto-rows-[165px]
                lg:grid-cols-6
              "
            >
              {services.map(
                (service, index) => (
                  <ServiceTile
                    key={
                      service.slug ||
                      `service-${index}`
                    }
                    service={service}
                    index={index}
                    isActive={
                      index ===
                      activeIndex
                    }
                    onSelect={
                      selectService
                    }
                  />
                )
              )}
            </div>
          </LayoutGroup>

          {/* MOBILE HINT */}

          <div
            className="
              mt-5
              flex
              justify-center
              sm:hidden
            "
          >
            {/* <div
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/[0.06]
                bg-white/[0.02]
                px-3
                py-1.5
                font-mono
                text-[7px]
                uppercase
                tracking-[0.2em]
                text-slate-600
              "
            >
              <FiChevronLeft size={10} />


              <FiChevronRight size={10} />
            </div> */}
          </div>

          {/* NAVIGATION */}

          <div
            className="
              mt-6
              flex
              items-center
              justify-between
              border-t
              border-white/[0.06]
              pt-5
              sm:mt-8
            "
          >
            <div
              className="
                min-w-0
                max-w-[65%]
                font-mono
                text-[7px]
                uppercase
                tracking-[0.22em]
                text-slate-600
                sm:text-[8px]
              "
            >
              Selected

              <span
                className="
                  ml-1
                  inline-block
                  max-w-[150px]
                  truncate
                  align-bottom
                  text-blue-400
                  sm:ml-2
                  sm:max-w-[300px]
                "
              >
                {activeIndex === null
                  ? "NONE"
                  : allServices[
                      activeIndex
                    ]?.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={
                  previousService
                }
                aria-label="Previous service"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-blue-400/15
                  bg-blue-500/[0.04]
                  text-slate-400
                  transition-all
                  duration-300
                  hover:border-blue-400/40
                  hover:bg-blue-500/10
                  hover:text-blue-300
                  active:scale-90
                "
              >
                <FiChevronLeft
                  size={16}
                />
              </button>

              <button
                type="button"
                onClick={
                  nextService
                }
                aria-label="Next service"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-blue-400/15
                  bg-blue-500/[0.04]
                  text-slate-400
                  transition-all
                  duration-300
                  hover:border-blue-400/40
                  hover:bg-blue-500/10
                  hover:text-blue-300
                  active:scale-90
                "
              >
                <FiChevronRight
                  size={16}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <CTABand />

      {/* ==========================================================
          GLOBAL STYLES
      ========================================================== */}

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

          html {
            scroll-behavior: smooth;
          }

          body {
            overflow-x: hidden;
          }

          button {
            -webkit-tap-highlight-color: transparent;
          }

          img {
            user-select: none;
          }

          @media (max-width: 640px) {
            html {
              scroll-behavior: smooth;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              scroll-behavior: auto !important;
            }
          }
        `}
      </style>
    </>
  );
}