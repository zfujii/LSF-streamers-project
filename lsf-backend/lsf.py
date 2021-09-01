import praw
import praw_info
import re

#praw login information
reddit = praw.Reddit(
    client_id = praw_info.CLIENT_ID,
    client_secret = praw_info.CLIENT_SECRET,
    user_agent = praw_info.USER_AGENT,
)

def sortLinkFlairs(): #returns two dictionaries, one for streamers and one for categories, counts for each of them.
    topOfMonth = reddit.subreddit("LivestreamFail").top("month")
    streamerDict = {}
    categoryDict = {}
    dramaCount = 0
    for post in topOfMonth:
        streamer = ""
        category = ""
        if post.link_flair_text == None:
            continue
        if "Warning" in post.link_flair_text:
            continue
        if "Clip in comments." in post.link_flair_text:
            continue
        if "Drama" in post.link_flair_text: # keep track of drama posts
            dramaCount += 1
        if ":" not in post.link_flair_text:
            continue
        flair = (re.sub(r'\:.*?\:', '', post.link_flair_text)).lstrip() #gets rid of :twitch: or :twitter:
        if "|" in flair:
            flairList = flair.split("|")
            streamer = flairList[0].rstrip()
            category = flairList[1].lstrip()
            if category in categoryDict.keys():
                categoryDict[category] += 1
            else:
                categoryDict[category] = 1
        else:
            streamer = flair
        if streamer in streamerDict.keys():
            streamerDict[streamer] += 1
        else:
            streamerDict[streamer] = 1
    return (streamerDict, categoryDict, dramaCount)
    
def embedClips(): #return top 3 clips of the month urls so it can be embeded in react
    topOfMonth = reddit.subreddit("LivestreamFail").top("month")
    top3 = []
    for post in topOfMonth:
        top3.append(post.url)
    return [top3[0], top3[1], top3[2]]

