FROM ayudantevirtual/botpress:v12.10.6_node10.21
WORKDIR /botpress

RUN apt update && \
	apt install -y \
	wget \
 && rm -rf /var/lib/apt/lists/* && \
    wget -c -q -O modules/channel-slack-av.tgz \
    https://github.com/ayudante-virtual/channel-slack/releases/download/v1.0.1/channel-slack-av.tgz && \
    ./bp extract

ENV BP_MODULE_NLU_DUCKLINGURL='https://duckling.botpress.io'
ENV BP_MODULE_NLU_LANGUAGESOURCES='[{"endpoint":"https://lang-01.botpress.io"}]'
ADD data data

CMD ["./bp"]
