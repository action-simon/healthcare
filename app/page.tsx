"use client";

import { Separator } from "@/components/ui/separator";
import * as m from "@/paraglide/messages";

export default function Home() {
  //const pathname = usePathname(); //make sure to use the one from `@/lib/i18n`

  return (
    <main className="container py-12 flex flex-col space-y-8">
      <p>
        {
          "HEALTHCARE MEETINGS provides a unique framework for professionals, enabling them to discover new service providers, suppliers, innovations, and differentiate themselves from their competitors."
        }
      </p>
      <p>
        {
          'As a true business fair focused on professionals, our goal is to encourage direct "face-to-face" meetings between top decision-makers and exhibitors through pre-organized and highly qualified business meetings prior to the event.'
        }
      </p>
      <h2>Health measures</h2>
      <ul>
        <li>Mask recommended</li>
        <li>Hand sanitization</li>
        <li>1 meter distance</li>
        <li>No handshakes</li>
      </ul>
      <p>
        {
          "Healthcare Meetings targets professionals seeking concrete support proposals for projects aimed at improving patient reception, the work of healthcare providers, or managers."
        }
      </p>
      <p>
        {
          "When creating HEALTHCARE MEETINGS, the Weyou Group wanted to give you access to the world of healthcare, with its innovations, improvements, and new standards. From logistics to hygiene, including IT security, cybersecurity, and the patient environment, Healthcare Meetings offers a unique opportunity to access a trade fair with business meetings to discover all the changes in healthcare, social, and medical-social institutions. These one-on-one meetings are a privileged exchange of ideas and, especially in times of crisis, an effective lever for the development of your business."
        }
      </p>
      <h2>Dear professionals,</h2>
      <p>
        {
          "We are Alina Khudyakova, Defne Kirtas, Tyra Smeitink, Aysenur Demirel, Enriko Pharsenadze, and Zeynep Celik. We are a project group called MindsUnited, currently participating in the Smart Solutions Semester project at Saxion University of Applied Sciences. Our interdisciplinary team consists of International Business and Nursing students. We are currently working on a project to raise awareness for the effective implementation of Advanced Care Planning for professionals working with dementia patients in the IJssel-Vecht region. We are part of the project in collaboration with the Windesheim University of Applied Sciences in Zwolle. We are working together with various clients and disciplines to emphasize the importance of Advanced Care Planning."
        }
      </p>
      <p>
        {
          "In the period from November to December, we are planning to hold a KICK-OFF meeting with various professionals, where the appropriate form of Advanced Care Planning will be presented. The exact content of this meeting is still to be determined. As a project group, we would like to generate interest in this event, as it will have great value for professionals."
        }
      </p>
      <p>
        {
          "What is proactive care planning? Advanced Care Planning involves making decisions about future medical care in the event that an individual is unable to communicate their preferences. It includes discussing preferences, values, and goals regarding medical treatments and documenting them in legal documents such as living wills or medical powers of attorney. This ensures that the received care aligns with the patient's personal preferences, even if they are unable to make decisions themselves. In this process, professionals collaborate to achieve the best care outcomes within this palliative phase for this target group."
        }
      </p>
    </main>
  );
}
