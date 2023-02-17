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
	private Integer nbrRightAnswers;
	private Integer nbrWrongAnswers;
	private Integer nbrUnanswered;
	private LocalDate realisationDate;
	private String timeUsed;
	private Integer score;

	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	private Quiz quiz;

	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	private AppUser appUser;

}
