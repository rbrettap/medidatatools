/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.medidata.avroserver.protocol.v1;  
@SuppressWarnings("all")
public class AvroRequest extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"AvroRequest\",\"namespace\":\"com.medidata.avroserver.protocol.v1\",\"fields\":[{\"name\":\"adSpaceName\",\"type\":\"string\"},{\"name\":\"location\",\"type\":{\"type\":\"record\",\"name\":\"Location\",\"fields\":[{\"name\":\"lat\",\"type\":\"float\",\"default\":0.0},{\"name\":\"lon\",\"type\":\"float\",\"default\":0.0}]},\"default\":\"null\"}]}");
  @Deprecated public java.lang.CharSequence adSpaceName;
  @Deprecated public com.medidata.avroserver.protocol.v1.Location location;
  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return adSpaceName;
    case 1: return location;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: adSpaceName = (java.lang.CharSequence)value$; break;
    case 1: location = (com.medidata.avroserver.protocol.v1.Location)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'adSpaceName' field.
   */
  public java.lang.CharSequence getAdSpaceName() {
    return adSpaceName;
  }

  /**
   * Sets the value of the 'adSpaceName' field.
   * @param value the value to set.
   */
  public void setAdSpaceName(java.lang.CharSequence value) {
    this.adSpaceName = value;
  }

  /**
   * Gets the value of the 'location' field.
   */
  public com.medidata.avroserver.protocol.v1.Location getLocation() {
    return location;
  }

  /**
   * Sets the value of the 'location' field.
   * @param value the value to set.
   */
  public void setLocation(com.medidata.avroserver.protocol.v1.Location value) {
    this.location = value;
  }

  /** Creates a new AvroRequest RecordBuilder */
  public static com.medidata.avroserver.protocol.v1.AvroRequest.Builder newBuilder() {
    return new com.medidata.avroserver.protocol.v1.AvroRequest.Builder();
  }
  
  /** Creates a new AvroRequest RecordBuilder by copying an existing Builder */
  public static com.medidata.avroserver.protocol.v1.AvroRequest.Builder newBuilder(com.medidata.avroserver.protocol.v1.AvroRequest.Builder other) {
    return new com.medidata.avroserver.protocol.v1.AvroRequest.Builder(other);
  }
  
  /** Creates a new AvroRequest RecordBuilder by copying an existing AvroRequest instance */
  public static com.medidata.avroserver.protocol.v1.AvroRequest.Builder newBuilder(com.medidata.avroserver.protocol.v1.AvroRequest other) {
    return new com.medidata.avroserver.protocol.v1.AvroRequest.Builder(other);
  }
  
  /**
   * RecordBuilder for AvroRequest instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<AvroRequest>
    implements org.apache.avro.data.RecordBuilder<AvroRequest> {

    private java.lang.CharSequence adSpaceName;
    private com.medidata.avroserver.protocol.v1.Location location;

    /** Creates a new Builder */
    private Builder() {
      super(com.medidata.avroserver.protocol.v1.AvroRequest.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.medidata.avroserver.protocol.v1.AvroRequest.Builder other) {
      super(other);
    }
    
    /** Creates a Builder by copying an existing AvroRequest instance */
    private Builder(com.medidata.avroserver.protocol.v1.AvroRequest other) {
            super(com.medidata.avroserver.protocol.v1.AvroRequest.SCHEMA$);
      if (isValidValue(fields()[0], other.adSpaceName)) {
        this.adSpaceName = (java.lang.CharSequence) data().deepCopy(fields()[0].schema(), other.adSpaceName);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.location)) {
        this.location = (com.medidata.avroserver.protocol.v1.Location) data().deepCopy(fields()[1].schema(), other.location);
        fieldSetFlags()[1] = true;
      }
    }

    /** Gets the value of the 'adSpaceName' field */
    public java.lang.CharSequence getAdSpaceName() {
      return adSpaceName;
    }
    
    /** Sets the value of the 'adSpaceName' field */
    public com.medidata.avroserver.protocol.v1.AvroRequest.Builder setAdSpaceName(java.lang.CharSequence value) {
      validate(fields()[0], value);
      this.adSpaceName = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'adSpaceName' field has been set */
    public boolean hasAdSpaceName() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'adSpaceName' field */
    public com.medidata.avroserver.protocol.v1.AvroRequest.Builder clearAdSpaceName() {
      adSpaceName = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'location' field */
    public com.medidata.avroserver.protocol.v1.Location getLocation() {
      return location;
    }
    
    /** Sets the value of the 'location' field */
    public com.medidata.avroserver.protocol.v1.AvroRequest.Builder setLocation(com.medidata.avroserver.protocol.v1.Location value) {
      validate(fields()[1], value);
      this.location = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'location' field has been set */
    public boolean hasLocation() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'location' field */
    public com.medidata.avroserver.protocol.v1.AvroRequest.Builder clearLocation() {
      location = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    @Override
    public AvroRequest build() {
      try {
        AvroRequest record = new AvroRequest();
        record.adSpaceName = fieldSetFlags()[0] ? this.adSpaceName : (java.lang.CharSequence) defaultValue(fields()[0]);
        record.location = fieldSetFlags()[1] ? this.location : (com.medidata.avroserver.protocol.v1.Location) defaultValue(fields()[1]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}