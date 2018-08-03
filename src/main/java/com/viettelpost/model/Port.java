package com.viettelpost.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "PORT")
public class Port {
    @Id
    @GenericGenerator(
            name = "SequenceGenerator",
            strategy = "com.viettelpost.util.SequenceGeneratorIfNotExists",
            parameters = {
                    @org.hibernate.annotations.Parameter(name = "sequence_name", value = "port_seq"),
            }
    )
    @GeneratedValue(generator = "SequenceGenerator")
    @Column(name = "PORT_ID")
    private Long portId;

    @Column(name = "PORT_NAME")
    private String portName;

    @Column(name = "PORT_CODE")
    private String portCode;

    @Column(name = "LOCATION")
    private String location;

    @Column(name = "COUNTRY")
    private String country;

    @Column(name = "AREA")
    private String area;

    @Column(name = "NOTE")
    private String note;


    public Long getPortId() {
        return portId;
    }

    public void setPortId(Long portId) {
        this.portId = portId;
    }

    public String getPortName() {
        return portName;
    }

    public void setPortName(String portName) {
        this.portName = portName;
    }

    public String getPortCode() {
        return portCode;
    }

    public void setPortCode(String portCode) {
        this.portCode = portCode;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

}
