import os
import pandas as pd

def get_home_data():
    # Load the CSV file with tile data
    csv_path = os.path.join('data', 'book2.csv')
    df = pd.read_csv(csv_path)

    box_data = [
        {
            'id': 1,
            'title': 'Personnel Count',
            'content': df.shape[0]
        },
        {
            'id': 2,
            'title': 'AoR Breakdown',
            'content': [
                {'label': 'AFRICOM', 'value': 700},
                {'label': 'EUCOM', 'value': 800},
                {'label': 'SOCCOM', 'value': 1000}
            ]
        }
    ]

    tile_data = [
        {
            'id': 1,
            'title': 'USASOC',
            'imagePath': 'data/USASOC.png',
            'description': 'Description for Tile 1'
        },
        {
            'id': 2,
            'title': 'NSW',
            'imagePath': 'data/NSW.png',
            'description': 'Description for Tile 2'
        },
    ]

    return box_data, tile_data