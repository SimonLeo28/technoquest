export default function RulesSection() {
  const rules = [
    "All participants must register before the deadline.",
    "It is mandatory for all participants to wear their ID cards during the event.",
    "It is mandatory for all participants to connect to the event's Wi-Fi network.",
    "Mobile phones must be kept on silent mode during sessions.",
    "Decisions of the judges/organizers will be final.",
    "max 6 Members per team including leader.",
    "Plagiarism will lead to immediate disqualification.",
    "Teams must adhere to fair practices.",
    "Use your own equipments.",
    "Participants must have a report on the project and there must be a ppt for the same.",
    "One FEMALE MEMBER is mandatory in each team.",
  ];

  return (
    <div className="w-full bg-black py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-400 text-center mb-6">
          Rules & Guidelines
        </h2>
        <ul className="list-decimal list-inside space-y-3 text-white text-lg">
          {rules.map((rule, idx) => (
            <li key={idx} className="hover:text-purple-300 transition-colors">
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
