export type Option = {
    value: string,
    label: string,
}

export const options: Array<Option> = [
    {
        value: "all",
        label: "Kaikki kaupungit"
    },
    {
        value: "espoo",
        label: "Espoo"
    },
    {
        value: "jyvaskyla",
        label: "Jyväskylä"
    },
    {
        value: "kuopio",
        label: "Kuopio"
    },
    {
        value: "tampere",
        label: "Tampere"
    }
]