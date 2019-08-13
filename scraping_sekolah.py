import requests
import json
import pandas as pd

url = "http://jendela.data.kemdikbud.go.id/api/index.php/cwilayah/wilayahKabGet"

response = requests.get(url)
data = response.text
parsed = json.loads(data)
df=pd.read_json(parsed)



