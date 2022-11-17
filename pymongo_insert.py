from pymongo import MongoClient

def get_database():
 
   # Provide the mongodb atlas url to connect python to mongodb using pymongo
   CONNECTION_STRING = "mongodb+srv://mongo:Kik8QY61sXNqNfqn@cluster0.d6qxssd.mongodb.net/?retryWrites=true&w=majority"
 
   # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
   client = MongoClient(CONNECTION_STRING)
 
   # Create the database for our example (we will use the same database throughout the tutorial
   return client['amazon_listing']
  
# This is added so that many files can reuse the function get_database()
if __name__ == "__main__":   
  
   # Get the database
   dbname = get_database()

dbname = get_database()
dbname["amazonData"].insert_many([
  {
    "item_ID": 1,
    "CPU_Name": "Ryzen 9 5900X",
    "GPU_Name": "Radeon RX 6700 XT",
    "ram": 16,
    "price": 2499.99,
    "Listing": "Skytech Chronos Gaming PC Desktop - AMD Ryzen 9 5900X 3.7GHz, 6700XT 12G GDDR6, 16GB DDR4 3200, 1TB NVMe SSD, 750W Gold PSU, 240MM AIO, AC WiFi, Windows 10 Home 64-bit, Black"
  },
  {
    "item_ID": 2,
    "CPU_Name": "Core i7-11700F",
    "GPU_Name": "Radeon RX 6600 XT",
    "ram": 16,
    "price": 1255.49,
    "Listing": "iBUYPOWER Pro Gaming PC Computer Desktop SlateMR 244i (Intel i7 11700F 2.5 GHz, AMD Radeon RX 6600 XT 8GB, 16GB DDR4, 480 GB SSD, WiFi Ready, VR Ready, Windows 11 Home)"
  },
  {
    "item_ID": 3,
    "CPU_Name": "Ryzen 5 5600G",
    "GPU_Name": "Radeon RX 5500 XT",
    "ram": 8,
    "price": 1139.0,
    "Listing": "Newest HP Pavilion Premium Gaming Desktop PC: 6-Core AMD Gaming Processor Ryzen 5 5600G(Upto 4.4GHz), 8GB RAM, 1TB SSD+1TB HDD, 4GB AMD Radeon RX5500, WiFi, Bluetooth, HDMI, DP, USB-C, Win10, TF"
  },
  {
    "item_ID": 4,
    "CPU_Name": "Ryzen 5 5600G",
    "GPU_Name": "Radeon RX 5500 XT",
    "ram": 32,
    "price": 1299.0,
    "Listing": "Newest HP Pavilion Premium Gaming Desktop PC: 6-Core AMD Gaming Processor Ryzen 5 5600G(Upto 4.4GHz), 32GB RAM, 1TB SSD+1TB HDD, 4GB AMD Radeon RX5500, WiFi, Bluetooth, HDMI, DP, USB-C, Win10, TF"
  },
  {
    "item_ID": 5,
    "CPU_Name": "Ryzen 5 5600G",
    "GPU_Name": "Radeon RX 5500 XT",
    "ram": 16,
    "price": 878.88,
    "Listing": "2022 Newest HP Pavilion Gaming Desktop, AMD 6-Core Ryzen 5 5600G Processor(Beat i7-10700K), AMD Radeon RX 5500, 16GB RAM, 256GB NVMe SSD, Win 11 Home + HDMI Cable (AMD RX5500 | 16GB | 256GB)"
  },
  {
    "item_ID": 6,
    "CPU_Name": "Ryzen 5 5600G",
    "GPU_Name": "Radeon RX 5500 XT",
    "ram": 32,
    "price": 1199.0,
    "Listing": "Newest HP Pavilion Premium Gaming Desktop PC: 6-Core AMD Gaming Processor Ryzen 5 5600G(Upto 4.4GHz), 32GB RAM, 512GB SSD+1TB HDD, 4GB AMD Radeon RX5500, WiFi, Bluetooth, HDMI, DP, USB-C, Win10, TF"
  },
  {
    "item_ID": 7,
    "CPU_Name": "Ryzen 5 5600G",
    "GPU_Name": "Radeon RX 5500 XT",
    "ram": 32,
    "price": 1499.0,
    "Listing": "Newest HP Pavilion Premium Gaming Desktop PC: 6-Core AMD Gaming Processor Ryzen 5 5600G(Upto 4.4GHz), 32GB RAM, 2TB SSD+2TB HDD, 4GB AMD Radeon RX5500, WiFi, Bluetooth, HDMI, DP, USB-C, Win10, TF"
  },
  {
    "item_ID": 8,
    "CPU_Name": "Ryzen 5 5600G",
    "GPU_Name": "Radeon RX 5500 XT",
    "ram": 32,
    "price": 1149.0,
    "Listing": "HP Pavilion Premium Gaming Desktop Computer I AMD 6-Core Ryzen 5 5600G Processor (>i5-10500) I 32GB DDR4 512GB SSD + 1TB HDD I AMD Radeon RX 5500 4GB I USB-C HDMI Win10 Black + HDMI Cable"
  },
  {
    "item_ID": 9,
    "CPU_Name": "Core i5-12600K",
    "GPU_Name": "GeForce RTX 3070",
    "ram": 8,
    "price": 1799.99,
    "Listing": "Skytech Chronos Gaming PC Desktop \u00e2\u20ac\u201c Intel Core i5 12600K 3.7 GHz, RTX 3070, 1TB NVME SSD, 16G DDR4 3200, 650W Gold PSU, 240mm AIO, AC Wi-Fi, Windows 10 Home 64-bit"
  },
  {
    "item_ID": 10,
    "CPU_Name": "Ryzen 5 5600X",
    "GPU_Name": "GeForce RTX 3060 Ti",
    "ram": 16,
    "price": 1699.99,
    "Listing": "Skytech Shiva Gaming PC Desktop - AMD Ryzen 5 5600X 3.7GHz, RTX 3060 Ti 8GB GDDR6, 16GB DDR4 3200, 1TB SSD, 600W Gold PSU, AC WiFi, Windows 10 Home 64-bit"
  },
  {
    "item_ID": 11,
    "CPU_Name": "Ryzen 7 5700G",
    "GPU_Name": "GeForce RTX 3060",
    "ram": 16,
    "price": 1549.0,
    "Listing": "ASUS Flagship ROG Strix G10 Gaming Desktop Computer AMD Octa-Core Ryzen 7 5700G (Beats i7-10700) 16GB RAM 256GB SSD + 1TB HDD Geforce RTX 3060 12GB Graphic DisplayPort DVI Win10 Grey + HDMI Cable"
  },
  {
    "item_ID": 12,
    "CPU_Name": "Core i9-12900KF",
    "GPU_Name": "GeForce RTX 3060",
    "ram": 32,
    "price": 2299.99,
    "Listing": "CUK Aegis R by MSI Gaming Desktop (Liquid Cooled Intel Core i9-12900KF, 32GB DDR4 RAM, 512GB NVMe SSD + 2TB HDD, NVIDIA GeForce RTX 3060 12GB, Windows 10 Home) Gamer PC Computer"
  },
  {
    "item_ID": 13,
    "CPU_Name": "Core i7-10700F",
    "GPU_Name": "GeForce RTX 3060",
    "ram": 16,
    "price": 1649.0,
    "Listing": "Dell Inspiron G5 5000 Gaming Desktop Tower - Intel Core i7-10700F, 16GB DDR4 RAM, 1TB SSD, NVIDIA GeForce RTX 3060 12GB GDDR6, Windows 10 Home - Abyss Black (Latest Model)"
  },
  {
    "item_ID": 14,
    "CPU_Name": "Ryzen 5 3600",
    "GPU_Name": "GeForce RTX 3060",
    "ram": 16,
    "price": 1399.99,
    "Listing": "SkyTech Archangel 3.0 Gaming Computer PC Desktop - Ryzen 5 3600 6-Core 3.6GHz, RTX 3060 12GB, 1TB SSD, 16GB DDR4 3200, RGB Fans, AC WiFi, 600W Gold PSU, Windows 10 Home 64-bit, White"
  },
  {
    "item_ID": 15,
    "CPU_Name": "Core i7-9700KF",
    "GPU_Name": "GeForce RTX 3060",
    "ram": 16,
    "price": 2199.99,
    "Listing": "Skytech Shadow 3.0 Gaming PC Desktop - Intel Core-i7 9700KF 3.6GHz, RTX 3060 12GB, 16GB DDR4 2666, 1TB SSD, AC WiFi, Win 10 Home, Black"
  },
  {
    "item_ID": 16,
    "CPU_Name": "Ryzen 5 3600",
    "GPU_Name": "GeForce RTX 2060",
    "ram": 16,
    "price": 1399.99,
    "Listing": "SkyTech Shadow 3.0 Gaming Computer PC Desktop - Ryzen 5 3600 6-Core 3.6GHz, RTX 2060 6G, 1TB SSD, 16GB DDR4 3000, RGB Fans, AC WiFi, Windows 10 Home 64-bit, Black"
  },
  {
    "item_ID": 17,
    "CPU_Name": "Core i5-10400F",
    "GPU_Name": "GeForce RTX 2060",
    "ram": 16,
    "price": 1039.99,
    "Listing": "HP Pavilion Gaming Desktop, 10th Generation Intel Core i5-10400F Processor, NVIDIA GeForce RTX 2060 Graphics, 16 GB RAM, 512 GB SSD, Windows 11 Home (TG01-1260, Shadow Black)"
  },
  {
    "item_ID": 18,
    "CPU_Name": "Core i7-11700F",
    "GPU_Name": "GeForce RTX 2060",
    "ram": 16,
    "price": 1649.99,
    "Listing": "iBUYPOWER Pro Gaming PC Computer Desktop Element MR 208i (Intel i7-11700F 2.5GHz,NVIDIA GeForce RTX 2060 6GB, 16GB DDR4, 240GB SSD, 1TB HDD, WiFi Ready, Windows 10 Home)"
  },
  {
    "item_ID": 19,
    "CPU_Name": "Core i5-11500",
    "GPU_Name": "GeForce GTX 1660",
    "ram": 16,
    "price": 1189.0,
    "Listing": "Lenovo Legion Tower 5 Gaming Desktop, 11th Gen Intel Core i5-11500 Processor, GeForce GTX 1660 Super Graphics, 16GB DDR4 RAM, 1TB PCIe SSD, RGB Light, Windows 11 Home"
  },
  {
    "item_ID": 20,
    "CPU_Name": "Core i7-11700F",
    "GPU_Name": "GeForce GTX 1660",
    "ram": 16,
    "price": 1699.99,
    "Listing": "iBUYPOWER Pro Gaming PC Computer Desktop Element MR 199i (Intel i7-11700F 2.5GHz, NVIDIA GTX 1660 Ti 6GB, 16GB DDR4 RAM, 240GB SSD, 1TB HDD, WiFi Ready, Windows 10 Home)"
  },
  {
    "item_ID": 21,
    "CPU_Name": "Core i5-10400F",
    "GPU_Name": "GeForce GTX 1660",
    "ram": 8,
    "price": 1146.99,
    "Listing": "CyberpowerPC Gamer Xtreme VR Gaming PC, Intel i5-10400F 2.9GHz, GeForce GTX 1660 Super 6GB, 8GB DDR4, 500GB NVMe SSD, Wi-Fi Ready & Windows 10 Home (GXiVR8060A10)"
  },
  {
    "item_ID": 22,
    "CPU_Name": "Core i5-9400F",
    "GPU_Name": "GeForce GTX 1660",
    "ram": 8,
    "price": 1429.0,
    "Listing": "CyberpowerPC Gamer Xtreme VR Gaming PC, Intel Core i5-9400F 2.9GHz, NVIDIA GeForce GTX 1660 6GB, 8GB DDR4, 120GB SSD, 1TB HDD, WiFi Ready & Win 10 Home (GXiVR8060A7, Black)"
  },
  {
    "item_ID": 23,
    "CPU_Name": "Core i5-10400F",
    "GPU_Name": "GeForce GTX 1650",
    "ram": 8,
    "price": 758.95,
    "Listing": "HP Pavilion Gaming Desktop, NVIDIA GeForce GTX 1650, Intel Core i5-10400F, 8 GB DDR4 RAM, 256 GB PCIe NVMe SSD, Windows 11, USB Mouse and Keyboard, Compact Tower Design (TG01-1020, 2020)"
  },
  {
    "item_ID": 24,
    "CPU_Name": "Core i3-10105",
    "GPU_Name": "GeForce GTX 1650",
    "ram": 8,
    "price": 659.99,
    "Listing": "HP Pavilion Gaming PC, NVIDIA GeForce GTX 1650, 10th Gen Intel Core i3-10105, 8 GB RAM, 256 GB SSD, Windows 11, Wi-Fi 5 & Bluetooth 4.2, 9 USB Ports, Pre-Built Gaming PC Tower (TG01-1220, 2021)"
  },
  {
    "item_ID": 25,
    "CPU_Name": "Core i5-10400F",
    "GPU_Name": "GeForce GTX 1650",
    "ram": 32,
    "price": 799.99,
    "Listing": "HP Pavilion TG01 Gaming Desktop PC - Intel Core i5-10400F 2.9GHz 12GB RAM 512GB SSD NVIDIA GeForce GTX 1650 Super 4GB GDDR6 Dedicated Graphics Windows 10 (Renewed)"
  },
  {
    "item_ID": 26,
    "CPU_Name": "Core i5-11400F",
    "GPU_Name": "GeForce GTX 1650",
    "ram": 8,
    "price": 826.67,
    "Listing": "HP Pavilion Gaming PC, NVIDIA GeForce GTX 1650, 11th Gen Intel Core i5-11400F Processor, 8 GB RAM, 512 GB SSD, Windows 11, Wi-Fi 5 & Bluetooth 4.2, 9 USB Ports, Pre-Built PC (TG01-2040, 2021)"
  },
  {
    "item_ID": 27,
    "CPU_Name": "Ryzen 3 3100",
    "GPU_Name": "GeForce GTX 1650",
    "ram": 8,
    "price": 849.99,
    "Listing": "iBUYPOWER Pro Gaming PC Computer Desktop Slate5MR 250a (AMD Ryzen 3 3100 3.6 GHz, NVIDIA GTX 1650 4GB, 8GB DDR4, 480 GB SSD, WiFi Ready, VR Ready, Windows 11 Home)"
  },
  {
    "item_ID": 28,
    "CPU_Name": "Ryzen 5 3600",
    "GPU_Name": "GeForce GT 710",
    "ram": 8,
    "price": 799.0,
    "Listing": "iBUYPOWER Pro Gaming PC Computer Desktop Trace 4 MR 180A (AMD Ryzen 5 3600 3.6GHz, NVIDIA GeForce GT 710 1GB, 8GB DDR4 RAM, 240GB SSD, WiFi Ready, Windows 10 Home)"
  },
  {
    "item_ID": 29,
    "CPU_Name": "Core i5-6500",
    "GPU_Name": "GeForce GT 1030",
    "ram": 16,
    "price": 569.99,
    "Listing": "Dell Gaming T3620 High Performance Tower Desktop i5-6500 Up to 3.60GHz 16GB 256GB NVMe M.2 SSD + 2TB HDD NVIDIA GT 1030 2GB HDMI Built in WiFi BT Wireless Keyboard & Mouse Win10 Pro (Renewed)"
  },
  {
    "item_ID": 30,
    "CPU_Name": "Core i3-10105",
    "GPU_Name": "GeForce GT 1030",
    "ram": 8,
    "price": 796.0,
    "Listing": "iBUYPOWER Starter PC Computer Desktop SlateMR 240i (Intel i3-10105F 3.7GHz,NVIDIA GeForce GT 1030 2GB, 8GB DDR4, 480 GB SSD, WiFi Ready, Windows 11 Home)"
  }
]
)