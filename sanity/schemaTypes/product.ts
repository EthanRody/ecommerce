import {defineField, defineType} from "sanity";
import {TrolleyIcon} from '@sanity/icons';

export const product = defineType({
    name: "product",
    title: 'Product',
    type: 'document',
    icon: TrolleyIcon,
    fields: [
        defineField({
            name: "slug",
            type: 'slug',
            options: {
                source: "name"
            }
        }),
        defineField({
            name: "name",
            type: 'string',
        }),
        defineField({
            name: "description",
            type: 'string',
        }),
        defineField({
            name: "sales",
            type: 'number',
        }),
        defineField({
            name: "stock",
            type: 'number',
        }),
        defineField({
            name: "price",
            type: 'number',
        }),
        defineField({
            name: "image",
            type: 'url',
        }),
        defineField({
            name: "categories",
            type: 'string'
        }),
    ],
})