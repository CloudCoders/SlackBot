import os
import time
from slackclient import SlackClient

BOT_ID = os.environ.get("BOT_ID")

AT_BOT = "<@" + BOT_ID + ">"

slack_client = SlackClient(os.environ.get('SLACK_BOT_TOKEN'))


def parse_slack_output(slack_rtm_output):

    output_list = slack_rtm_output

    if output_list and len(output_list) > 0:
        if output_list and len(output_list) > 0:
            for output in output_list:
                if output and 'text' in output:
                    return output['text'].lower(), \
                           output['channel']
    return None, None


def handle_data(data, channel):
    if "jarvis" in data:
        slack_client.api_call("chat.postMessage", channel=channel,
                              text="Aun no estoy configurado", as_user=True)


if __name__ == "__main__" :
    READ_WEB_SOCKET_DELAY = 1
    if slack_client.rtm_connect():
        print("J.A.R.V.I.S. operative")
        while True:
            data, channel = parse_slack_output(slack_client.rtm_read())
            if data and channel:
                handle_data(data, channel)
            time.sleep(READ_WEB_SOCKET_DELAY)
    else:
        print("Connection failed! J.A.R.V.I.S. broken")
