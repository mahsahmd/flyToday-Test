export const filters = [
    {
        category: {
            fa: "تعداد توقف",
            value: "stopQuantity"
        },
        items: [
            {
                name: 'بدون توقف',
                value: 'nonStop'
            },
            {
                name: 'یک توقف',
                value: 'oneStop'
            },
            {
                name: 'بیش از 2 توقف',
                value: 'multiStop'
            }

        ]
    },
    {
        category: {
            fa: "نوع پرواز",
            value: "isCharter"
        },
        items: [
            {
                name: 'پرواز های سیستمی',
                value: false
            },
            {
                name: 'پرواز های چارتری',
                value: true
            }
        ]
    }
]