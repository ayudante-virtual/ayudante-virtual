FROM botpress/server:v12_10_5
WORKDIR /botpress
RUN wget -c -q -O modules/channel-slack-av.tgz \
    https://github.com/ayudante-virtual/channel-slack/releases/download/v1.0.0/channel-slack-av.tgz && \
    ./bp extract
ENV BP_MODULE_NLU_DUCKLINGURL='https://duckling.botpress.io'
ENV BP_MODULE_NLU_LANGUAGESOURCES='[{"endpoint":"https://lang-01.botpress.io"}]'
ADD data data
CMD ["./bp"]
