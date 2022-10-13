import {FIELD_CHECKBOX, FIELD_INPUT, FIELD_NUMBER, FIELD_RADIO, FIELD_SELECT, NONE_VARIANT_VALUE} from "@/consts";

export default {
    namespaced: true,
    state: {
        configCreateFrames: {
            rows: [
                [
                    {
                        title: "App",
                        key: "app",
                        type: FIELD_CHECKBOX,
                        weight: 50,
                        withAllVar: true, // Еслимы хотим добавить вариант All
                        values: [
                            {
                                title: "EM",
                                value: "EM",
                                isChosen: false
                            },
                            {
                                title: "SM",
                                value: "SM",
                                isChosen: false
                            },
                            {
                                title: "IH",
                                value: "IH",
                                isChosen: false
                            },
                            {
                                title: "MY",
                                value: "MY",
                                isChosen: false
                            },
                            {
                                title: "LK",
                                value: "LK",
                                isChosen: false
                            },
                            {
                                title: "TT",
                                value: "TT",
                                isChosen: false
                            },
                            {
                                title: "CD",
                                value: "CD",
                                isChosen: false
                            },
                        ]
                    }
                ],
                [
                    {
                        title: "Social Media",
                        key: "socialMedia",
                        type: FIELD_CHECKBOX,
                        placeholder: "Select",
                        weight: 50,
                        values: [
                            {
                                title: "FB",
                                value: "FB",
                                isChosen: false
                            },
                            {
                                title: "TikTok",
                                value: "TIKTOK",
                                isChosen: false
                            },
                            {
                                title: "MT",
                                value: "MYTARGET",
                                isChosen: false
                            },
                            {
                                title: "GA",
                                value: "GA",
                                isChosen: false
                            },
                            {
                                title: "UN",
                                value: "UNITY",
                                isChosen: false
                            },
                            {
                                title: "LT",
                                value: "LIFTOFF",
                                isChosen: false
                            },
                            {
                                title: "PS",
                                value: "PERSONA",
                                isChosen: false
                            },
                            {
                                title: "VK",
                                value: "VK",
                                isChosen: false
                            },
                        ]
                    },
                ],
                [
                    {
                        title: "How much?",
                        key: "count",
                        type: FIELD_NUMBER,
                        placeholder: "Digit",
                        max: 100,
                        min: 1,
                        weight: 50,
                        isSystem: true,
                        value: 1
                    },
                    {
                        title: "OS",
                        key: "system",
                        type: FIELD_RADIO,
                        placeholder: "Select",
                        weight: 50,
                        values: [
                            {
                                title: "Android",
                                value: "AND",
                                isChosen: false
                            },
                            {
                                title: "IOS",
                                value: "IOS",
                                isChosen: false
                            },
                        ]
                    }
                ],
                [
                    {
                        title: "Format",
                        key: "format",
                        type: FIELD_RADIO,
                        placeholder: "Select",
                        weight: 50,
                        values: [
                            {
                                title: "Banner",
                                value: "BANNER",
                                isChosen: false
                            },
                            {
                                title: "Photo",
                                value: "PHOTO",
                                isChosen: false
                            },
                        ]
                    },
                    {
                        title: "Gender",
                        key: "gender",
                        type: FIELD_RADIO,
                        weight: 50,
                        values: [
                            {
                                title: "Male",
                                value: "M",
                                isChosen: false
                            },
                            {
                                title: "Female",
                                value: "F",
                                isChosen: false
                            },
                            {
                                title: "MF",
                                value: "MF",
                                isChosen: false
                            },
                        ]
                    }
                ],
                [
                    {
                        title: "Jira task",
                        key: "jira_task",
                        type: FIELD_INPUT,
                        placeholder: "Past task from jira",
                        weight: 25,
                        value: ""
                    },
                    {
                        title: "Variation",
                        key: "variant",
                        type: FIELD_NUMBER,
                        placeholder: "enter",
                        weight: 25,
                        isSystem: true,
                        value: 1
                    },
                ],
                [
                    {
                        title: "Country",
                        key: "country",
                        type: FIELD_SELECT,
                        placeholder: "Choose",
                        weight: 50,
                        values: [
                            {
                                title: "Russia(RU)",
                                value: "RU",
                                isChosen: false
                            },
                            {
                                title: "Germany(GE)",
                                value: "GE",
                                isChosen: false
                            },
                            {
                                title: "USA(US)",
                                value: "US",
                                isChosen: false
                            },
                            {
                                title: "Saudy Amirates(SA)",
                                value: "SA",
                                isChosen: false
                            },
                            {
                                title: "Brazil(BR)",
                                value: "BR",
                                isChosen: false
                            },
                            {
                                title: "Indonesia(ID)",
                                value: "ID",
                                isChosen: false
                            },
                            {
                                title: "Zambia(ZA)",
                                value: "ZA",
                                isChosen: false
                            },
                            {
                                title: "India(IN)",
                                value: "IN",
                                isChosen: false
                            },
                            {
                                title: "Thailand(TH)",
                                value: "TH",
                                isChosen: false
                            },
                            {
                                title: "France(FR)",
                                value: "FR",
                                isChosen: false
                            },
                            {
                                title: "Italia(IT)",
                                value: "IT",
                                isChosen: false
                            },
                            {
                                title: "Deutsch(DE)",
                                value: "DE",
                                isChosen: false
                            },
                            {
                                title: "Belarus(BY)",
                                value: "BY",
                                isChosen: false
                            },
                            {
                                title: "Turkish(TR)",
                                value: "TR",
                                isChosen: false
                            },
                            {
                                title: "Malasian(MY)",
                                value: "MY",
                                isChosen: false
                            },
                            {
                                title: "Phillipines(PH)",
                                value: "PH",
                                isChosen: false
                            },
                            {
                                title: "Portugal(PT)",
                                value: "PT",
                                isChosen: false
                            },
                            {
                                title: "Netherlands(NL)",
                                value: "NL",
                                isChosen: false
                            },
                            {
                                title: "Spain(ES)",
                                value: "ES",
                                isChosen: false
                            },
                        ]
                    },
                    {
                        title: "Language",
                        key: "language",
                        type: FIELD_SELECT,
                        placeholder: "Choose",
                        weight: 50,
                        values: [
                            {
                                title: "Russian(RUS)",
                                value: "RUS",
                                isChosen: false
                            },
                            {
                                title: "English(ENG)",
                                value: "ENG",
                                isChosen: false
                            },
                            {
                                title: "Indonesian(IDN)",
                                value: "IDN",
                                isChosen: false
                            },
                            {
                                title: "Arabic(ARA)",
                                value: "ARA",
                                isChosen: false
                            },
                            {
                                title: "France(FRA)",
                                value: "FRA",
                                isChosen: false
                            },
                            {
                                title: "Portugal(POR)",
                                value: "POR",
                                isChosen: false
                            },
                            {
                                title: "Turkish(TUR)",
                                value: "TUR",
                                isChosen: false
                            },
                            {
                                title: "Spanish(SPA)",
                                value: "SPA",
                                isChosen: false
                            },
                            {
                                title: "Indian(IND)",
                                value: "IND",
                                isChosen: false
                            },
                            {
                                title: "Italian(ITA)",
                                value: "ITA",
                                isChosen: false
                            },
                            {
                                title: "Thailand(THA)",
                                value: "THA",
                                isChosen: false
                            },
                            {
                                title: "Ukrain(UKR)",
                                value: "UKR",
                                isChosen: false
                            },
                            {
                                title: "Philipin(FIL)",
                                value: "FIL",
                                isChosen: false
                            },
                            {
                                title: "Malasian(MAL)",
                                value: "MAL",
                                isChosen: false
                            },
                            {
                                title: "German(DEU)",
                                value: "DEU",
                                isChosen: false
                            },
                            {
                                title: "Netherlands(NLD)",
                                value: "NLD",
                                isChosen: false
                            },
                            {
                                title: "NOTEXT",
                                value: "NOTEXT",
                                isChosen: false
                            },
                        ]
                    },
                ],
                [
                    {
                        title: "Name",
                        key: "conceptName",
                        type: FIELD_INPUT,
                        placeholder: "Write concept name",
                        weight: 100,
                        capitalize: true,
                        value: ""
                    },
                    {
                        title: "Type",
                        key: "type",
                        type: FIELD_RADIO,
                        weight: 100,
                        placeholder: "Choose",
                        values: [
                            {
                                title: "None",
                                value: NONE_VARIANT_VALUE,
                                isChosen: false
                            },
                            {
                                title: "Iteration",
                                value: "_IT",
                                isChosen: false
                            },
                            {
                                title: "Rework",
                                value: "_Rework",
                                isChosen: false
                            },
                        ]
                    },
                ],
                [
                    {
                        title: "Size",
                        key: "size",
                        type: FIELD_CHECKBOX,
                        weight: 50,
                        values: [
                            {
                                title: "1080x1350",
                                value: "1080x1350",
                                isChosen: false
                            },
                            {
                                title: "1080x1080",
                                value: "1080x1080",
                                isChosen: false
                            },
                            {
                                title: "1200x1200",
                                value: "1200x1200",
                                isChosen: false
                            },
                            {
                                title: "1500x1200",
                                value: "1500x1200",
                                isChosen: false
                            },
                            {
                                title: "1200x628",
                                value: "1200x628",
                                isChosen: false
                            },
                            {
                                title: "1200x1500",
                                value: "1200x1500",
                                isChosen: false
                            },
                            {
                                title: "1080x1920",
                                value: "1080x1920",
                                isChosen: false
                            },
                            {
                                title: "1920x1080",
                                value: "1920x1080",
                                isChosen: false
                            }
                        ]
                    },
                ],
            ]
        },
        pattern: "{app}_{system}_{socialMedia}_{format}_{jira_task}_{country}({language})_{gender}_{variant}_{size}_{conceptName}{type}"
    },
    getters:{

    },
    mutations: {

    },
    actions: {

    }
}
