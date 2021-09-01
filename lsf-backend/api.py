from flask import Flask, jsonify
import lsf
import praw
import praw_info

app = Flask(__name__)

reddit = praw.Reddit(
    client_id = praw_info.CLIENT_ID,
    client_secret = praw_info.CLIENT_SECRET,
    user_agent = praw_info.USER_AGENT,
)

@app.route('/api', methods=['GET'])
def api():
    streamerDict, categoryDict, dramaCount = lsf.sortLinkFlairs()
    urlList = lsf.embedClips()

    data = [streamerDict, categoryDict, dramaCount, urlList]

    return jsonify({'data' : data})
