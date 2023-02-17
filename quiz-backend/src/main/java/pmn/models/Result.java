package pmn.models;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Result implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false)
	private Integer nbrRightAnswers;
	@Column(nullable = false)
	private Integer nbrWrongAnswers;
	@Column(nullable = false)
	private Integer nbrUnanswered;
	@Column(nullable = false)
	private LocalDate realisationDate;
	@Column(nullable = false)
	private String timeUsed;
	@Column(nullable = false)
	private Integer score;
	@ManyToOne(optional = false, fetch = FetchType.LAZY)
	@JsonIgnore
	private Quiz quiz;
	@ManyToOne(optional = false, fetch = FetchType.LAZY)
	@JsonIgnore
	private AppUser appUser;

}
