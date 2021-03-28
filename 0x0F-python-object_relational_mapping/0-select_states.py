#!/usr/bin/python3
"""lists all states from database hbtn_0e_0_usa"""


if __name__ == "__main__":
    
    import sys
    import MySQLdb

    db = MySQLdb.connect(host="localhost", user=sys.argv[1],
                         passwd=argv[2], db=argv[3],
                         port=3306)
    cursor = db.cursor()
    cursor.execute("SELECT FROM states ORDER BY id ASC")

    for row in cursor.fetchall():
        print(row)
    db.close()
