FROM golang:alpine as builder
RUN apk add build-base
RUN mkdir /build 
ADD . /build/
WORKDIR /build 
RUN GOOS=linux go build -a -installsuffix cgo -ldflags '-extldflags "-static"' -o server ./cmd/server/

FROM scratch
COPY --from=builder /build/server /app/
COPY ./test.db /app/
WORKDIR /app
CMD ["./server"]
