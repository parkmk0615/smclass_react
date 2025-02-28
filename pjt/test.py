import time
import random
from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
browser = webdriver.Chrome()
browser.maximize_window() # 창 최대화
url = 'https://weverse.io/'
browser.get(url)
time.sleep(7) # 페이지 열리는 시간동안 지연
soup = BeautifulSoup(browser.page_source,"lxml")
print(browser.page_source)
with open('test.html',"w",encoding="utf-8") as f:
 f.write(soup.prettify())