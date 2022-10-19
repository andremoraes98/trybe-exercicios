import csv
import json

def percent_quantity_by_category_csv_file():
    with open('4.json') as file:
        json_content = json.load(file)

    quantity_by_category = {}

    for book in json_content:
        for category in book['categories']:
            if category in quantity_by_category.keys():
                quantity_by_category[category] += 1
            else:
                quantity_by_category[category] = 1

    for category in quantity_by_category:
        quantity_by_category[category] = round((quantity_by_category[category] / len(json_content)) * 100, 2)

    with open('percent_quantity_by_category.csv', 'w', encoding = 'utf-8') as new_file:
        writer = csv.writer(new_file)

        headers = ['Categoria', 'Porcentagem']
        writer.writerow(headers)

        for category, percentage in quantity_by_category.items():
            row = [category, percentage]
            writer.writerow(row)

percent_quantity_by_category_csv_file()