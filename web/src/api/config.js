import {
    FIELD_CHECKBOX,
    FIELD_INPUT,
    FIELD_NUMBER,
    FIELD_RADIO,
    FIELD_SELECT,
    NONE_VARIANT_VALUE
} from "@/consts";

// валидируем всю конфигурацию
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

// валидируем отдельное поле
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
// имён для артбордов мы должны будем создать
// n-ое каличество вариантов имён
// из одного конфига
export function getNameFromConfig(pattern, config, addition = {}){
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
                            value = valueItem.value !== NONE_VARIANT_VALUE ? valueItem.value : " ";
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
                if (addition.variant !== undefined){
                    value = +addition.variant
                }

                if (value !== "") {
                    value = +value < 10 ? `0${value}`: value
                }
            }

            // Так как мы перебираем приложения в массиве при создании и передаём данные для перезаписи
            if (fieldItem.key === "app" && addition.app !== undefined){
                value = addition.app
            }

            // Так как мы перебираем social media в массиве при создании и передаём данные для перезаписи
            if (fieldItem.key === "socialMedia" && addition.media !== undefined){
                value = addition.media
            }

            // Так как мы перебираем size в массиве при создании и передаём данные для перезаписи
            if (fieldItem.key === "size" && addition.size !== undefined){
                value = `${addition.size.width}x${addition.size.height}`
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

export function getAppsFromConfig(config){
    let apps = []

    config.rows.forEach(row => {
        row.forEach(fieldItem => {
            if (fieldItem.key === "app"){
                apps = fieldItem.values.filter(valueModel => valueModel.isChosen)
            }
        })
    })

    return apps
}

export function getMediaFromConfig(config){
    let media = []

    config.rows.forEach(row => {
        row.forEach(fieldItem => {
            if (fieldItem.key === "socialMedia"){
                media = fieldItem.values.filter(valueModel => valueModel.isChosen)
            }
        })
    })

    return media
}

export function getSizesFromConfig(config){
    let sizes = []

    config.rows.forEach(row => {
        row.forEach(fieldItem => {
            if (fieldItem.key !== "size") return

            fieldItem.values.forEach(valueItem => {
                if (!valueItem.isChosen) return

                let params = valueItem.value.split("x")

                sizes.push({
                    width: +params[0],
                    height: +params[1]
                })
            })
        })
    })

    return sizes
}