import {FIELD_CHECKBOX, FIELD_INPUT, FIELD_NUMBER, FIELD_RADIO, FIELD_SELECT} from "@/consts";

export function getConfig(){
    return {
        rows: [
            [
                {
                    title: "App",
                    key: "app",
                    type: FIELD_SELECT,
                    placeholder: "Select",
                    weight: 50,
                    values: [
                        {
                            title: "Evermatch",
                            value: "EM",
                            isChosen: false
                        },
                        {
                            title: "Sweetmeet",
                            value: "SM",
                            isChosen: false
                        },
                        {
                            title: "IHappy",
                            value: "IH",
                            isChosen: false
                        },
                        {
                            title: "CurvyDating",
                            value: "CD",
                            isChosen: false
                        },
                    ]
                },
                {
                    title: "How much?",
                    key: "count",
                    type: FIELD_NUMBER,
                    placeholder: "Digit",
                    max: 100,
                    defaultValue: 1,
                    min: 1,
                    weight: 20,
                    isSystem: true
                },
                {
                    title: "OS",
                    key: "system",
                    type: FIELD_SELECT,
                    placeholder: "Select",
                    weight: 30,
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
                    title: "Social Media",
                    key: "socialMedia",
                    type: FIELD_SELECT,
                    placeholder: "Select",
                    weight: 50,
                    values: [
                        {
                            title: "Facebook",
                            value: "FB",
                            isChosen: false
                        },
                        {
                            title: "TIKTOK",
                            value: "TIKTOK",
                            isChosen: false
                        },
                        {
                            title: "MyTarget",
                            value: "MYTARGET",
                            isChosen: false
                        },
                        {
                            title: "Google Ads",
                            value: "GA",
                            isChosen: false
                        },
                        {
                            title: "UNITY",
                            value: "UNITY",
                            isChosen: false
                        },
                        {
                            title: "LIFTOFF",
                            value: "LIFTOFF",
                            isChosen: false
                        },
                        {
                            title: "PERSONA",
                            value: "PERSONA",
                            isChosen: false
                        },
                    ]
                },
                {
                    title: "Format",
                    key: "format",
                    type: FIELD_SELECT,
                    placeholder: "Select",
                    weight: 20,
                    values: [
                        {
                            title: "BANNER",
                            value: "BANNER",
                            isChosen: false
                        },
                        {
                            title: "PHOTO",
                            value: "PHOTO",
                            isChosen: false
                        },
                    ]
                },
                {
                    title: "Gender",
                    key: "gender",
                    type: FIELD_RADIO,
                    weight: 30,
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
                    ]
                }
            ],
            [
                {
                    title: "Jira task",
                    key: "jira_task",
                    type: FIELD_INPUT,
                    placeholder: "Past task from jira",
                    weight: 25
                },
                {
                    title: "Variation",
                    key: "variant",
                    type: FIELD_NUMBER,
                    placeholder: "enter",
                    weight: 25,
                    isSystem: true
                },
                {
                    title: "Country",
                    key: "country",
                    type: FIELD_SELECT,
                    placeholder: "Select",
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
                    ]
                },
            ],
            [
                {
                    title: "Language",
                    key: "language",
                    type: FIELD_SELECT,
                    placeholder: "Select",
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
                            title: "Philipin(PHI)",
                            value: "PHI",
                            isChosen: false
                        },
                        {
                            title: "Malasian(MAL)",
                            value: "MAL",
                            isChosen: false
                        },
                        {
                            title: "German(GER)",
                            value: "GER",
                            isChosen: false
                        },
                    ]
                },
                {
                    title: "Size",
                    key: "size",
                    type: FIELD_RADIO,
                    weight: 50,
                    values: [
                        {
                            title: "4:5",
                            value: "1080x1350",
                            isChosen: false
                        },
                        {
                            title: "1:1",
                            value: "1080x1080",
                            isChosen: false
                        },
                        {
                            title: "1,91:1",
                            value: "1200x628",
                            isChosen: false
                        },
                        {
                            title: "9:16",
                            value: "1080x1920",
                            isChosen: false
                        },
                        {
                            title: "16:9",
                            value: "1920x1080",
                            isChosen: false
                        }
                    ]
                },
            ],
            [
                {
                    title: "Name",
                    key: "conceptName",
                    type: FIELD_INPUT,
                    placeholder: "Concept name",
                    weight: 100,
                    capitalize: true
                },
                {
                    title: "Type",
                    key: "type",
                    type: FIELD_SELECT,
                    weight: 100,
                    placeholder: "Select type",
                    values: [
                        {
                            title: "Iteration",
                            value: "IT",
                            isChosen: false
                        },
                        {
                            title: "Rework",
                            value: "Rework",
                            isChosen: false
                        },
                    ]
                },
            ]
        ]
    }
}

export function validateConfig(config){
    let result = true

    if (config){
        config.rows.forEach(row => {
            row.forEach(fieldItem => {
                if (!validateField(fieldItem)) result = false
            })
        })
    }

    return result
}

export function validateField(field){
    let result = false

    switch (field.type){
        case FIELD_SELECT:
        case FIELD_RADIO:
        case FIELD_CHECKBOX:
            field.values.forEach(valueItem => {
                if (valueItem.isChosen) {
                    result = true
                }
            })

            break
        case FIELD_INPUT:
        case FIELD_NUMBER:
            if (field.value !== undefined && field.value !== null) {
                result = true
            }

            break
    }

    return result
}

// третий параметр нужен, так как при создании
// имён мы для артбордов, мы должны будем создать
// n-ое каличество вариантов имён
// из одного конфига
export function getNameFromConfig(pattern, config, variant){
    config.rows.forEach(rowItem => {
        rowItem.forEach(fieldItem => {
            let value = null

            switch (fieldItem.type) {
                case FIELD_CHECKBOX:
                    fieldItem.values.forEach(valueItem => {
                        if (valueItem.isChosen) {
                            if (!value) {
                                value = valueItem.value
                            } else {
                                value += ";" + valueItem.value
                            }
                        }
                    })

                    break;
                case FIELD_SELECT:
                    fieldItem.values.forEach(valueItem => {
                        if (valueItem.isChosen) {
                            value = valueItem.value
                        }
                    })

                    break;
                case FIELD_RADIO:
                    fieldItem.values.forEach(valueItem => {
                        if (valueItem.isChosen) {
                            value = valueItem.value
                        }
                    })

                    break;
                case FIELD_NUMBER:
                    value = fieldItem.value

                    break;
                case FIELD_INPUT:
                    value = fieldItem.value

                    if (value && fieldItem.capitalize) {
                        value = value.split(" ").map(word => word = word.replace(/\b\w/g, l => l.toUpperCase())).join("")
                    }

                    break;
            }

            // Так как ваиант должен иметь кастомное отображение
            if (fieldItem.key === "variant"){
                if (variant !== undefined){
                    value = +variant
                }

                if (value !== "") {
                    value = +value < 10 ? `0${value}`: value
                }
            }

            if (value){
                pattern = pattern.replace(`{${fieldItem.key}}`, value)
            }
        })
    })

    return pattern
}

export function getCountFromConfig(config){
    let count = 1

    config.rows.forEach(row => {
        row.forEach(fieldItem => {
            if (fieldItem.key === "count"){ count = fieldItem.value }
        })
    })

    return count
}

export function getStartVariantFromConfig(config){
    let variant = 1

    config.rows.forEach(row => {
        row.forEach(fieldItem => {
            if (fieldItem.key === "variant"){ variant = fieldItem.value }
        })
    })

    return variant
}

export function getSizeFromConfig(config){
    let width = 100
    let height = 100

    config.rows.forEach(row => {
        row.forEach(fieldItem => {
            if (fieldItem.key === "size"){
                fieldItem.values.forEach(valueItem => {
                    if(valueItem.isChosen){
                        let params = valueItem.value.split("x")

                        width = +params[0]
                        height = +params[1]
                    }
                })
            }
        })
    })

    return { width, height }
}


export function getPatternString(){
    return "{app}_{system}_{socialMedia}_{format}_{jira_task}_{country}({language})_{gender}_{variant}_{size}_{conceptName}_{type}"
}