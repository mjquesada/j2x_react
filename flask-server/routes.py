from flask import Flask, jsonify
from services import get_home_data
import traceback

app = Flask(__name__)

@app.route('/api/home', methods=['GET'])
def get_home_page_data():
    print("Entering get_home_page_data()")
    try:
        box_data, tile_data = get_home_data()
        print("box_data:", box_data)
        print("tile_data:", tile_data)
        return {
            'boxData': box_data,
            'tileData': tile_data
        }
    except Exception as e:
        print("Error in get_home_page_data():")
        print(traceback.format_exc())
        return "Error occurred", 500
    
@app.route('/error', methods=['GET'])
def trigger_error():
    return non_existent_variable

# @app.route('/api/force', methods=['GET'])
# def get_force_page_data():
#     force_bar_chart_data1, force_bar_chart_data2, map_data, table_data = get_force_data()
#     return jsonify({
#         'forceBarChartData1': force_bar_chart_data1,
#         'forceBarChartData2': force_bar_chart_data2,
#         'mapData': map_data,
#         'tableData': table_data
#     })

# @app.route('/api/roster', methods=['GET'])
# def get_roster_page_data():
#     roster_bar_chart_data, table_data = get_roster_data()
#     return jsonify({
#         'rosterBarChartData': roster_bar_chart_data,
#         'tableData': table_data
#     })