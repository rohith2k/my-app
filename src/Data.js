
var questions={
"language": "English",
"workflow_id": "covid_survey_v2",
"worflow_template": [
{
"question_id": "5e78c9799f6f26e9cd6bf910",
"question_text": "For whom are you taking this test?",
"name": "relation",
"selection_type": "Single-Select",
"option_type": "Any",
"dependencies": [],
"options": [
{
"id": "5e78bce0c894d976c7469b46",
"name": "For yourself",
"preferred_term": "For yourself",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e78bcf5c894d976c7469b47",
"name": "Parent",
"preferred_term": "Parent",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e78bd25c894d976c7469b49",
"name": "Spouse",
"preferred_term": "Spouse",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e78bd38c894d976c7469b4a",
"name": "Child",
"preferred_term": "Child",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95d85e33a54e3fc37241d3",
"name": "In-law",
"preferred_term": "In-law",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e78bd4fc894d976c7469b4b",
"name": "Someone else",
"preferred_term": "Someone else",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
}
]
},
{
"question_id": "5e73802a279319e40b728f76",
"question_text": "What is your gender?",
"name": "gender",
"selection_type": "Single-Select",
"option_type": "Any",
"dependencies": [],
"options": [
{
"id": "5e73666041e0346babab1f26",
"name": "Male",
"preferred_term": "Male",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e73668641e0346babab1f27",
"name": "Female",
"preferred_term": "Female",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e7366a041e0346babab1f28",
"name": "Other",
"preferred_term": "Other",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
}
]
},
{
"question_id": "5e95d8ad33a54e3fc37241d4",
"question_text": "Please enter your age in years?",
"name": "enter age",
"selection_type": "Number",
"option_type": "Any",
"dependencies": [],
"options": []
},
{
"question_id": "5e95d94233a54e3fc37241d5",
"question_text": "Do you currently have any of these health conditions?",
"name": "health conditions v2",
"selection_type": "Multi-Select",
"option_type": "Any",
"dependencies": [],
"options": [
{
"id": "5e95c0ebc54f53b25b98b65d",
"name": "No existing conditions",
"preferred_term": "No existing conditions",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": true
},
{
"id": "5e73671841e0346babab1f2c",
"name": "Asthma",
"preferred_term": "Asthma",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c176c54f53b25b98b662",
"name": "Cancer",
"preferred_term": "Cancer",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e73672c41e0346babab1f2d",
"name": "Chronic lung disease (COPD)",
"preferred_term": "Chronic lung disease (COPD)",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e7367db41e0346babab1f2e",
"name": "Diabetes",
"preferred_term": "Diabetes",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c17fc54f53b25b98b665",
"name": "Hypertension",
"preferred_term": "Hypertension",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e7367f041e0346babab1f2f",
"name": "Heart Diseases",
"preferred_term": "Heart Diseases",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
}
]
},
{
"question_id": "5e95da4233a54e3fc37241d6",
"question_text": "Are you pregnant?",
"name": "pregnancy",
"selection_type": "Single-Select",
"option_type": "Any",
"dependencies": [
{
"question": "5e73802a279319e40b728f76",
"condition": "present",
"options": [
"5e73668641e0346babab1f27"
]
},
{
"question": "5e95d8ad33a54e3fc37241d4",
"condition": "range",
"range": {
"min": 18,
"max": 50
}
}
],
"options": [
{
"id": "5e734805cbb526bf0acaff19",
"name": "Yes",
"preferred_term": "Yes",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e734824cbb526bf0acaff1a",
"name": "No",
"preferred_term": "No",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": "YesNo",
"clear_others": false
}
]
},
{
"question_id": "5e95da7433a54e3fc37241d7",
"question_text": "Have you or someone in your family staying with you came in close contact with a laboratory confirmed COVID-19 patient in the last 14 days?",
"name": "contact with covid patient",
"selection_type": "Single-Select",
"option_type": "Any",
"dependencies": [],
"options": [
{
"id": "5e734805cbb526bf0acaff19",
"name": "Yes",
"preferred_term": "Yes",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e734824cbb526bf0acaff1a",
"name": "No",
"preferred_term": "No",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": "YesNo",
"clear_others": false
}
]
},
{
"question_id": "5e95dab133a54e3fc37241d8",
"question_text": "Have you or someone in your family staying with you attended a large gathering/ in a migration centre in the last 14 days?",
"name": "attended large gathering",
"selection_type": "Single-Select",
"option_type": "Any",
"dependencies": [],
"options": [
{
"id": "5e734805cbb526bf0acaff19",
"name": "Yes",
"preferred_term": "Yes",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e734824cbb526bf0acaff1a",
"name": "No",
"preferred_term": "No",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": "YesNo",
"clear_others": false
}
]
},
{
"question_id": "5e95dae433a54e3fc37241d9",
"question_text": "Are you currently working for essential services in public exposed places (such as hospitals, retail outlets, delivery services)",
"name": "you work for essential services",
"selection_type": "Single-Select",
"option_type": "Any",
"dependencies": [],
"options": [
{
"id": "5e734805cbb526bf0acaff19",
"name": "Yes",
"preferred_term": "Yes",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e734824cbb526bf0acaff1a",
"name": "No",
"preferred_term": "No",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": "YesNo",
"clear_others": false
}
]
},
{
"question_id": "5e95db1b33a54e3fc37241da",
"question_text": "Is someone in your family staying with you currently working for essential services in public exposed places (such as hospitals, retail outlets, delivery services)",
"name": "family member works for essential services",
"selection_type": "Single-Select",
"option_type": "Any",
"dependencies": [],
"options": [
{
"id": "5e734805cbb526bf0acaff19",
"name": "Yes",
"preferred_term": "Yes",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e734824cbb526bf0acaff1a",
"name": "No",
"preferred_term": "No",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": "YesNo",
"clear_others": false
}
]
},
{
"question_id": "5e95db8933a54e3fc37241db",
"question_text": "Are you having one or more of the following symptoms?",
"name": "primary covid symptoms",
"selection_type": "Multi-Select",
"option_type": "Any",
"dependencies": [],
"options": [
{
"id": "5e73682541e0346babab1f32",
"name": "None of the above",
"preferred_term": "None",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": true
},
{
"id": "5e95c18bc54f53b25b98b669",
"name": "Fever",
"preferred_term": "Fever",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c18fc54f53b25b98b66a",
"name": "Dry cough",
"preferred_term": "Dry cough",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c194c54f53b25b98b66b",
"name": "Feeling shortness of breath",
"preferred_term": "Feeling shortness of breath",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c198c54f53b25b98b66c",
"name": "Sore throat",
"preferred_term": "Sore throat",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c19cc54f53b25b98b66d",
"name": "Hoarseness in voice",
"preferred_term": "Hoarseness in voice",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c1a0c54f53b25b98b66e",
"name": "Headache",
"preferred_term": "Headache",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c1a4c54f53b25b98b66f",
"name": "Running Nose",
"preferred_term": "Running Nose",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
}
]
},
{
"question_id": "5e95dc2133a54e3fc37241dc",
"question_text": "Do you have any of the following symptoms?",
"name": "secondary covid symptoms",
"selection_type": "Multi-Select",
"option_type": "Any",
"dependencies": [
{
"question": "5e95db8933a54e3fc37241db",
"condition": "present",
"options": [
"5e95c18bc54f53b25b98b669"
]
}
],
"options": [
{
"id": "5e73682541e0346babab1f32",
"name": "None of the above",
"preferred_term": "None",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": true
},
{
"id": "5e95c1a9c54f53b25b98b670",
"name": "Loss of appetite",
"preferred_term": "Loss of appetite",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c1adc54f53b25b98b671",
"name": "Nausea",
"preferred_term": "Nausea",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c1b1c54f53b25b98b672",
"name": "Vomiting",
"preferred_term": "Vomiting",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c1b5c54f53b25b98b673",
"name": "Abdominal pain",
"preferred_term": "Abdominal pain",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c1b9c54f53b25b98b674",
"name": "Yellow discoloration of eyes and/or urine",
"preferred_term": "Yellow discoloration of eyes and/or urine",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c1bdc54f53b25b98b675",
"name": "Chest pain",
"preferred_term": "Chest pain",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c1c2c54f53b25b98b676",
"name": "Skin rash",
"preferred_term": "Skin rash",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c1c6c54f53b25b98b677",
"name": "Joint pain",
"preferred_term": "Joint pain",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c1cac54f53b25b98b678",
"name": "Muscle pain",
"preferred_term": "Muscle pain",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c1cec54f53b25b98b679",
"name": "Burning or painful sensation while passing urine",
"preferred_term": "Burning or painful sensation while passing urine",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
}
]
},
{
"question_id": "5e95dcf833a54e3fc37241dd",
"question_text": "Since how long you have fever?",
"name": "fever duration",
"selection_type": "Single-Select",
"option_type": "Any",
"dependencies": [
{
"question": "5e95db8933a54e3fc37241db",
"condition": "present",
"options": [
"5e95c18bc54f53b25b98b669"
]
}
],
"options": [
{
"id": "5e95c1d3c54f53b25b98b67a",
"name": "Fever started yesterday",
"preferred_term": "Fever started yesterday",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c1d7c54f53b25b98b67b",
"name": "Fever started about a week back",
"preferred_term": "Fever started about a week back",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c1dbc54f53b25b98b67c",
"name": "Fever since few weeks",
"preferred_term": "Fever since few weeks",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c1dfc54f53b25b98b67d",
"name": "Fever is present since more than a month",
"preferred_term": "Fever is present since more than a month",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
}
]
},
{
"question_id": "5e95dddc33a54e3fc37241de",
"question_text": "Please select highest recorded fever?",
"name": "highest recorded fever",
"selection_type": "Single-Select",
"option_type": "Any",
"dependencies": [
{
"question": "5e95db8933a54e3fc37241db",
"condition": "present",
"options": [
"5e95c18bc54f53b25b98b669"
]
}
],
"options": [
{
"id": "5e95c1e3c54f53b25b98b67e",
"name": "Less than 100.4 ⁰ F (38 ⁰ C)",
"preferred_term": "Less than 100.4 ⁰ F (38 ⁰ C)",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c1e7c54f53b25b98b67f",
"name": "Between 100.4-103.9 ⁰ F (38-39.9 ⁰ C)",
"preferred_term": "Between 100.4-103.9 ⁰ F (38-39.9 ⁰ C)",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c1ecc54f53b25b98b680",
"name": "Between 104-106.7 ⁰ F (40-41.5 ⁰ C)",
"preferred_term": "Between 104-106.7 ⁰ F (40-41.5 ⁰ C)",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c1f0c54f53b25b98b681",
"name": "Greater than 106.7 ᵒ F (>41.5 ᵒ C)",
"preferred_term": "Greater than 106.7 ᵒ F (>41.5 ᵒ C)",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c1f4c54f53b25b98b682",
"name": "Have not measured the temperature",
"preferred_term": "Have not measured the temperature",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
}
]
},
{
"question_id": "5e95dea733a54e3fc37241df",
"question_text": "What is the fever pattern?",
"name": "fever pattern",
"selection_type": "Single-Select",
"option_type": "Any",
"dependencies": [
{
"question": "5e95db8933a54e3fc37241db",
"condition": "present",
"options": [
"5e95c18bc54f53b25b98b669"
]
}
],
"options": [
{
"id": "5e95c1f8c54f53b25b98b683",
"name": "Intermittent fever (reduces with medicine)",
"preferred_term": "Intermittent fever (reduces with medicine)",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c1fdc54f53b25b98b684",
"name": "Intermittent fever (reduces without medicine)",
"preferred_term": "Intermittent fever (reduces without medicine)",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c201c54f53b25b98b685",
"name": "Continuous fever (does not reduce with medicine)",
"preferred_term": "Continuous fever (does not reduce with medicine)",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
},
{
"id": "5e95c205c54f53b25b98b686",
"name": "Fever only in evenings",
"preferred_term": "Fever only in evenings",
"type": "CommonEntity.QuestionnaireOption",
"display_image": [],
"description": null,
"option_type": null,
"clear_others": false
}
]
}
]
}

export {questions};