FROM registry.opensource.zalan.do/stups/openjdk:latest

EXPOSE 8443

COPY zmon-controller-app/target/zmon-controller-1.0.1-SNAPSHOT.jar /zmon-controller.jar
COPY target/scm-source.json /
COPY newrelic/newrelic.jar /newrelic.jar
COPY newrelic/newrelic.yml /newrelic.yml

CMD java $JAVA_OPTS $(java-dynamic-memory-opts) -javaagent:/newrelic.jar -jar /zmon-controller.jar
