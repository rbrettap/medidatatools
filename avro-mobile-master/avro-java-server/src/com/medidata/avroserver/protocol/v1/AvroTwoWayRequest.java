/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.medidata.avroserver.protocol.v1;

@SuppressWarnings("all")
public interface AvroTwoWayRequest {
  public static final org.apache.avro.Protocol PROTOCOL = org.apache.avro.Protocol.parse("{\"protocol\":\"AvroTwoWayRequest\",\"namespace\":\"com.flurry.avroserver.protocol.v1\",\"types\":[{\"type\":\"record\",\"name\":\"Location\",\"fields\":[{\"name\":\"lat\",\"type\":\"float\",\"default\":0.0},{\"name\":\"lon\",\"type\":\"float\",\"default\":0.0}]},{\"type\":\"record\",\"name\":\"AdRequest\",\"fields\":[{\"name\":\"adSpaceName\",\"type\":\"string\"},{\"name\":\"location\",\"type\":\"Location\",\"default\":\"null\"}]}],\"messages\":{}}");

  @SuppressWarnings("all")
  public interface Callback extends AvroTwoWayRequest {
    public static final org.apache.avro.Protocol PROTOCOL = com.medidata.avroserver.protocol.v1.AvroTwoWayRequest.PROTOCOL;
  }
}