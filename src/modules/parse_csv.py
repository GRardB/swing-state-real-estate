import csv

def parse_csv():

    """
    for every state, make a dict containing a list of all counties
    for every county in state, include county_name, percentage of dem and rep
    {'state_abbr':
        [{'per_dem': per_dem,
        'per_gop': per_gop,
        'county_name': county_name}, ...],
     'state_abbr':...
    }
    """

    json_file = {}

    with open('2016_US_County_Level_Presidential_Results.csv') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            data = {'per_dem': row['per_dem'],
                    'per_gop': row['per_gop'],
                    'county_name': row['county_name']}
            if row['state_abbr'] in json_file:
                json_file[row['state_abbr']].append(data)
            else:
                json_file[row['state_abbr']] = [data]

    return json_file
